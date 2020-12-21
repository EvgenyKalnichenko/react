import React, { Component } from 'react';

export default class TodoListItem extends Component {

    render() {
        const {label, important = false} = this.props;
        const liStyle = {
            color: important ? 'tomato' : 'black'
        };

        return (
            <span
                style= {liStyle}>
                {label}
            </span>
        )
    }
}
