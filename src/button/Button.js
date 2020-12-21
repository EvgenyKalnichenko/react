import React, {Component} from 'react';

export default class Button extends Component {

    render() {
        const {
            variant,
            content,
            ...others
        } = this.props;
        console.log({...others});
        return (
            <button className={variant} {...others}>
                {content}
            </button>
        )
    }
}
