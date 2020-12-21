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
        <div>
            <div className="todo-list-header">
                <TodoInput />
                <div className="todo-list-btn">
                    <Button content="All" variant="btn" disabled/>
                    <Button content="Active" variant="btn" />
                    <Button content="Done" variant="btn" />
                </div>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;
