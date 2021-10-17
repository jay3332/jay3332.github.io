import BannerButton from './components/BannerButton';
import * as ReactDOM from 'react-dom';
import * as React from 'react';  // Fixes linter errors

ReactDOM.render(
    <span>
        <BannerButton href='https://github.com/jay3332' alt='Github' icon='./assets/github.svg' />
        <BannerButton href='https://discord.gg/FqtZ6akWpd' alt='Discord' icon='./assets/discord.svg' />
    </span>,
    document.getElementById('banner-buttons')
);

document.getElementById('a')!.addEventListener('click', () => {
    document.body.classList.toggle('light');
});