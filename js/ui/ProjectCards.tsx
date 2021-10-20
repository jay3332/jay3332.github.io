import * as React from 'react';
import {
    ProjectCard,
    ProjectCardProps,
    ProjectCardLanguages as Languages,
} from '../components/ProjectCard';

const PROJECTS: ProjectCardProps[] = [
    {
        name: 'test',
        date: new Date(2021, 9, 19),
        description: 'this is a test project'.repeat(20),
        repository: 'https://github.com/jay3332/example',
        icon: '/assets/language-icons/python.png',
        languages: [Languages.nodejs, Languages.python],
        tags: [],
    },  
]

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
