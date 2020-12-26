import React, {Component} from 'react';

export default class TodoSearch extends Component {

    state = {
        todoDataFind: ''
    }

    onSearchTodoList = (e) => {
        const todoDataFind = e.target.value;
        this.setState({todoDataFind});
        this.props.onSearchTodoList(todoDataFind);
    }

    render () {
        return(
            <input
                className='todo-input'
                type='text'
                onChange={this.onSearchTodoList}
                value={this.state.todoDataFind}
                placeholder='Поиск...'/>
        );
    }
}
