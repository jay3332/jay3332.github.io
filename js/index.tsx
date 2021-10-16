// @ts-nocheck

import BannerButton from './components/banner-button';

ReactDOM.render(
    <span>
        <BannerButton href='https://github.com/jay3332' alt='Github' icon='./assets/github.svg' />
        <BannerButton href='#' alt='Discord' icon='./assets/discord.svg' />
    </span>,
    document.getElementById('banner-buttons')
);

document.getElementById('a').addEventListener('click', () => {
    document.body.classList.toggle('light');
});