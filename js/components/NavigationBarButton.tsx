import * as React from 'react';

interface NavigationBarButtonProps {
    name: string;
    href?: string;
    backToTop?: boolean;
}

export default class NavigationBarButton extends React.Component<NavigationBarButtonProps> {
    props: NavigationBarButtonProps;

    constructor(props: NavigationBarButtonProps) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <li className="nav-bar-button" id={this.props.backToTop ? "nav-back-to-top" : undefined}>
                <a href={this.props.href}>
                    {this.props.name}
                </a>
            </li>
        )
    }
}
