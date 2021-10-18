import * as React from 'react';

interface BannerButtonProps {
    icon: string;
    href: string;
    alt: string;
};

export default class BannerButton extends React.Component<BannerButtonProps> {
    props: BannerButtonProps;

    constructor(props: BannerButtonProps) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <a href={this.props.href} className="banner-button">
                <img src={this.props.icon} alt={this.props.alt} />
            </a>
        );
    }
}