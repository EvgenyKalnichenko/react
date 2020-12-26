import React, { Component } from 'react';

export default class TodoFilter extends Component {

    buttons = [
        {name: 'all', label:'Все'},
        {name: 'active', label:'Активные'},
        {name: 'done', label:'Завершенные'},
    ]

    render() {
        const {filter, onFilterChange} = this.props

        const buttons = this.buttons.map(({name, label}) => {
        const isActive = filter === name;
        const clazz = isActive ? 'is-active' : ' '
            return(
                <button type='button'
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return(
            <div className={`todo-filter`}>
                {buttons}
            </div>
        )
    }
}
