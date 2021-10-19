import BannerButton from '../components/BannerButton';
import * as React from 'react';

export default function BannerButtons() {
    return (
        <span>
            <BannerButton href='https://github.com/jay3332' alt='Github' icon='/assets/github.svg' />
            <BannerButton href='https://discord.gg/FqtZ6akWpd' alt='Discord' icon='/assets/discord.svg' />
        </span>
    );
}
