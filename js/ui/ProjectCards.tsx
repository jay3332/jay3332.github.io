import * as React from 'react';
import {
    ProjectCard,
    ProjectCardProps,
} from '../components/ProjectCard';

import PROJECTS from '../data/projects';

interface ProjectCardsState {
    sort(a: ProjectCardProps, b: ProjectCardProps): number,
    filter(project: ProjectCardProps): boolean,
}

export default class ProjectCards extends React.Component<{}, ProjectCardsState> {
    state: ProjectCardsState;
    
    constructor(props: {}) {
        super(props);
        this.state = {
            sort: (_a, _b) => 0,
            filter: _ => true,
        };
    }

    componentDidMount() {}

    get projects(): ProjectCardProps[] {
        return PROJECTS
            .filter(this.state.filter)
            .sort(this.state.sort);
    }

    render() {
        return (
            <span>
                {this.projects.map(project => (
                    <ProjectCard {...project} />
                ))}
            </span>
        )
    }
}
