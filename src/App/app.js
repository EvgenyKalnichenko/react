import React, { Component } from 'react'
import TodoList from '../todo-list/'
import TodoSearch from '../todo-search/'
import Button from '../button/'
import ItemAddForm from '../item-add-form/'
import CurrentList from '../current-list/'
import TodoFilter from '../todo-filter/'

export default class App extends Component {

    maxId = 5;

    state = {
        todoData : [
            this.createTodoItem('Сделать потрясающий app',false, false,'1.2.2020 0:12'),
            this.createTodoItem('Пообедать',false, false,'15.08.2020 10:10'),
            this.createTodoItem('Очень длинная задача, подробно рассписаная, сложная, но интересная.' +
                'Очень длинная задача, подробно рассписаная, сложная, но интересная',
                false, false,'10.01.2020 15:32'),
            this.createTodoItem('Учить React',false, false,'10.10.2020 12:52' ),
        ],
        todoDataFind: '',
        filter: 'all'
    }

    createTodoItem(label,done=false,important=false, data='') {
        return {
            label,
            important,
            done,
            data,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text,done,important, data) => {

        const d = new Date();
        const newData = `${d.getDate()}.${d.getDate()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
        const newItem = this.createTodoItem(text,done,important,data= newData);

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }
        })
    }

    onToggleProps(arr, id, nameProps) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [nameProps]: !oldItem[nameProps]}

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProps(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProps(todoData, id, 'done')
            }
        })
    }

    onSearchTodoList = (todoDataFind) => {
        this.setState({todoDataFind});
    }

    search(items, todoDataFind) {
        if(todoDataFind.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(todoDataFind.toLowerCase()) > -1
        })
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    filter(items, filter) {
        switch (filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, todoDataFind, filter} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visbleItems = this.filter(
            this.search(todoData, todoDataFind), filter);

        return (
            <div className='container'>
                <div className="todo-list-container">
                    <div className="todo-list-header">
                        <TodoSearch onSearchTodoList={this.onSearchTodoList}/>
                        <TodoFilter
                            filter={filter}
                            onFilterChange={this.onFilterChange}/>
                    </div>
                    <CurrentList toDo={todoCount} done={doneCount}/>
                    <TodoList
                        todos={visbleItems}
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}
                    />
                    <ItemAddForm onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    }
}

