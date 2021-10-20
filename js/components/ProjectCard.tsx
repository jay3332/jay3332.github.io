import * as React from 'react';

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
    icon?: string;
    languages?: {
        name: string,
        icon: string,
    }[];
    tags?: Tag[];
}

export class ProjectCard extends React.Component<ProjectCardProps> {
    props: ProjectCardProps;

    constructor(props: ProjectCardProps) {
        super(props);
        this.props = props;
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
                                        <span className="project-card-language tooltip">
                                            <img src={`/assets/language-icons/${icon}`} alt={name} />
                                            <span className="tooltip-content">
                                                {name}
                                            </span>
                                        </span>
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
                        {this.props.repository ? (
                            <a className="project-card-repository" href={this.props.repository}>
                                View Repository
                            </a>
                        ) : undefined}
                    </div>
                    <div className="project-card-icon">
                        <img src={this.props.icon} alt={this.props.name} />
                    </div>
                </div>
            </div>
        )
    }
}