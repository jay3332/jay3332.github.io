import {
    ProjectCardProps,
    ProjectCardLanguages as Languages,
} from '../components/ProjectCard';

// NOTE: Subtract 1 from month numbers as they start from 0
const cards: ProjectCardProps[] = [
    {
        name: 'My Website',
        date: new Date(2021, 9, 16),
        description: `
            The website you are viewing right now. 
            This was originally intended to be a Github Pages site, 
            but it is simply impossible to deploy this website onto 
            Github Pages without losing any functionality.`,
        repository: 'jay3332/jay3332.github.io',
        languages: [Languages.typescript, Languages.react, Languages.web],
        tags: [],
    },
    {
        name: 'pilmoji',
        date: new Date(2021, 4, 13),
        description: `
            A small utility that aids in rendering unicode emojis onto an image
            using Pillow, a fork of Python's official imaging library.`,
        repository: 'jay3332/pilmoji',
        languages: [Languages.python],
        tags: [],
    },
    {
        name: 'discord.py (fork)',
        date: new Date(2021, 8, 11),
        description: `
            discord.py was an extremely popular Discord API wrapper, written in of course, Python.
            It has since been archived, therefore this is my own, maintained fork of discord.py.`,
        repository: 'jay3332/discord.py',
        languages: [Languages.python],
        tags: [],
    },
    {
        name: 'FerrisChat web client',
        date: new Date(2021, 7, 30),
        description: 'A web client for FerrisChat.',
        repository: 'FerrisChat/WebClient',
        languages: [Languages.typescript, Languages.react, Languages.web],
        tags: [],
    }
]

export default cards;