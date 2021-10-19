import * as React from 'react';

const ProjectCardLanguages = {
    python: {name: 'Python', icon: 'python.png'},
    nodejs: {name: 'Node.js', icon: 'nodejs.png'},
    typescript: {name: 'TypeScript', icon: 'typescript.png'},  // Node.js "Backend" TypeScript
    rust: {name: 'Rust', icon: 'rust.png'},
    html: {name: 'HTML/CSS', icon: 'html.png'},  // HTML, CSS, but no JS
    web: {name: 'HTML/CSS/JS', icon: 'html.png'},  // HTML, CSS, and JS
    react: {name: 'React.js', icon: 'react.png'},
}

enum Tag {
    active,
    stale,
    archived,
    openSource,
}

interface ProjectCardProps {
    name: string;
    date: Date;
    description?: string;
    repository?: string;
    icon?: string;
    language?: {
        name: string,
        icon: string,
    };
    tags?: Tag[];
}

export default class ProjectCard extends React.Component<ProjectCardProps> {
    props: ProjectCardProps;

    constructor(props: ProjectCardProps) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="project-card">
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}