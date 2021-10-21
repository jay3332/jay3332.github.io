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
        branch: '2.0',
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
        name: 'FerrisChat Web Client',
        date: new Date(2021, 7, 30),
        description: 'A web client for FerrisChat.',
        repository: 'FerrisChat/WebClient',
        languages: [Languages.typescript, Languages.react, Languages.web],
        tags: [],
    },
    {
        name: 'js-cord',
        date: new Date(2021, 2, 15),
        description: "A JavaScript wrapper around Discord's API.",
        repository: 'jay3332/js-cord',
        languages: [Languages.nodejs, Languages.typescript],
        tags: [],
    },
    {
        name: 'expr.py',
        date: new Date(2021, 6, 1),
        description: 'A safe yet fast math expression evaluator made for Python.',
        repository: 'jay3332/expr.py',
        languages: [Languages.python],
        tags: [],
    },
    {
        name: 'UNO Discord Bot',
        date: new Date(2021, 7, 11),
        description: 'An experimental Discord bot that emulates the UNO card game.',
        repository: 'jay3332/UNO-Bot',
        languages: [Languages.python],
        tags: [],
    }
]

export default cards;