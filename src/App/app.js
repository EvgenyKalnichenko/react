import React from 'react';
import TodoList from '../todo-list/'
import TodoInput from '../todo-input/'
import Button from '../button/'

const todoData = [
    {label: 'Drink Coffe', important: false, id:1},
    {label: 'Make awesome app', important: true, id:2},
    {label: 'Have a lunch', important: false, id:3},
    {label: 'hello world', important: false, id:4},
]

const App = () => {
    return (
        <div className='container'>
            <div className="todo-list-container">
                <div className="todo-list-header">
                    <TodoInput />
                    <Button content="All" variant="btn is-active"/>
                    <Button content="Active" variant="btn" />
                    <Button content="Done" variant="btn" />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={ (id) => console.log('del', id)}
                />
            </div>
        </div>
    );
}

export default App;
