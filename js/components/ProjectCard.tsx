import * as React from 'react';
import * as ReactDOM from 'react-dom';
import marked from 'marked';

export const ProjectCardLanguages = {
    python: {name: 'Python', icon: 'python.png'},
    nodejs: {name: 'Node.js', icon: 'nodejs.png'},
    typescript: {name: 'TypeScript', icon: 'typescript.png'},  // Node.js "Backend" TypeScript
    rust: {name: 'Rust', icon: 'rust.png'},
    html: {name: 'HTML/CSS', icon: 'html.png'},  // HTML, CSS, but no JS
    web: {name: 'HTML/CSS/JS', icon: 'html.png'},  // HTML, CSS, and JS
    react: {name: 'React.js', icon: 'react.png'},
}

export enum Tag {
    active,
    stale,
    archived,
    openSource,
}

export interface ProjectCardProps {
    name: string;
    date: Date;
    description?: string;
    repository?: string;
    rst?: boolean;
    branch?: string;
    icon?: string;
    languages?: {
        name: string,
        icon: string,
    }[];
    tags?: Tag[];
}

interface ProjectCardState {
    cachedReadme?: string;
    cachedHasReadme?: boolean;
    showingReadme: boolean;
}

export class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {
    props: ProjectCardProps;
    state: ProjectCardState;

    constructor(props: ProjectCardProps) {
        super(props);
        this.props = props;
        this.state = {
            showingReadme: false
        };

        this.onReadmeClick = this.onReadmeClick.bind(this);
    }

    componentDidMount() {
        this.hasReadme().then(has => this.setState({
            cachedHasReadme: has,
            showingReadme: false,
        }))
    }

    get repositoryURL(): string | undefined {
        if (this.props.repository) return `https://github.com/${this.props.repository}`;
    }

    get readmeURL(): string | undefined {
        const ext = this.props.rst ? 'rst' : 'md';
        if (this.props.repository) return `https://raw.githubusercontent.com/${this.props.repository}/${this.branch}/README.${ext}`;
    }

    get branch(): string {
        return this.props.branch || 'master';
    }

    async _hasReadme(): Promise<boolean> {
        if (!this.readmeURL) 
            return false
        if (this.state.cachedHasReadme != null)
            return false

        try {
            // @ts-ignore
            const response = await fetch({ url: this.readmeURL, method: 'HEAD' });
            if (response.status != 200)
                return false;

            return true;
        } catch (e) {
            return false;
        }
    }

    async hasReadme(): Promise<boolean> {
        const result = await this._hasReadme();
        this.state.cachedHasReadme = result;
        return result;
    }

    async readme(): Promise<string | undefined> {
        if (!this.readmeURL) 
            return
        if (this.state.cachedReadme)
            return this.state.cachedReadme;
        try {
            const response = await fetch(this.readmeURL);
            if (response.status != 200)
                return;
    
            let readme = this.state.cachedReadme = await response.text();
            return readme;
        } catch (_) {
            return
        }
    }

    render() {
        return (
            <div className="project-card">
                <div className="project-card-items">
                    <div className="project-card-content">
                        <div className="project-card-header">
                            <span className="project-card-title">
                                {this.props.name}
                            </span>
                            <span className="project-card-languages">
                                {this.props.languages?.map(
                                    ({ name, icon }) => (
                                        <div className="project-card-language tooltip">
                                            <img src={`/assets/language-icons/${icon}`} alt={name} />
                                            <p className="tooltip-content">{name}</p>
                                        </div>
                                    )
                                )}
                            </span>
                        </div>
                        <span className="project-card-date">
                            {this.props.date.toLocaleDateString('en-US', { 
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                            })}
                        </span>
                        <p className="project-card-description">
                            {this.props.description || "This is a project has no description."}
                        </p>
                        {this.state.cachedHasReadme ? (
                            <div>
                                <div className="project-card-readme"></div>
                                <p className="view-readme" onClick={this.onReadmeClick}>{'\u25bc'} View README</p>
                            </div>
                        ) : undefined}
                        {this.props.repository ? (
                            <a className="project-card-repository" href={this.repositoryURL}>
                                <div className="project-card-repository-container">
                                    <img src="/assets/github.svg" />
                                    <p>View Repository</p>
                                </div>
                            </a>
                        ) : undefined}
                    </div>
                    <div className="project-card-icon">
                        {this.props.icon ? (
                            <img src={this.props.icon} alt={this.props.name} />
                        ) : undefined}
                    </div>
                </div>
            </div>
        )
    }

    onReadmeClick() {
        this.state.showingReadme ? this._readmeDisable() : this._readmeEnable();
    }

    _readmeEnable() {
        this.state.showingReadme = true;

        const element = ReactDOM.findDOMNode(this) as Element;
        const container = element.getElementsByClassName('project-card-readme')[0];
            
        container.innerHTML = 'Loading...';

        this.readme().then(res => {
            if (!res) res = 'README currently unavailable.';
            if (this.props.rst) {
                fetch('https://rst2html.jay3332.repl.co/convert', {
                    method: 'POST',
                    body: JSON.stringify({ content: res }),
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(r => r.text())
                    .then(r => container.innerHTML = r);
            }
            else container.innerHTML = marked(res);

            element.getElementsByClassName('view-readme')[0].innerHTML = "\u25b2 Hide README";
            // @ts-ignore
            hljs.highlightAll()
        })
    }

    _readmeDisable() {
        this.state.showingReadme = false;

        const element = ReactDOM.findDOMNode(this) as Element;
        element.getElementsByClassName('project-card-readme')[0].innerHTML = '';
        element.getElementsByClassName('view-readme')[0].innerHTML = "\u25bc View README";
    }
}