import BannerButtons from './ui/BannerButtons';
import NavigationBar from './ui/NavigationBar';
import * as ReactDOM from 'react-dom';
import * as React from 'react';  // Fixes linter errors

let element;

if (element = document.getElementById('banner-buttons')) ReactDOM.render(
    <BannerButtons />,
    element
);

if (element = document.getElementById('nav-bar')) ReactDOM.render(
    <NavigationBar />,
    element
);

document.body.style.marginTop = (document.getElementById('nav-bar')!.clientHeight + 5) + 'px';

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

document.getElementById('a')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

document.getElementById('nav-back-to-top')?.addEventListener('click', () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200)
        document.body.classList.add('__show-btt')
    else
        document.body.classList.remove('__show-btt');
});