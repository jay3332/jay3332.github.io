import NavigationBarButton from '../components/NavigationBarButton';
import * as React from 'react';

export default function NavigationBar() {
    return (
        <span id="nav-bar-items">
            <img src='./assets/jay3332.png' alt='jay3332' />
            <ul id="nav-bar-buttons">
                <NavigationBarButton name="Home" href="/" />
                <NavigationBarButton name="Back To Top" backToTop={true} />
            </ul>
        </span>
    );
}
