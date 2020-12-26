import React, {Component} from 'react';

export default class ItemAddForm extends Component {

    state = {
        label :'',
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const label = this.state.label;
        if(label.length > 0) {
            this.props.onItemAdded(label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form
                className='add-form'
                onSubmit={this.onSubmit}>
                <div className="add-form__row">
                    <input type="text"
                           className="todo-input"
                           onChange={this.onLabelChange}
                           placeholder="Что нужно сделать ?"
                           value={this.state.label}/>
                    <button className='btn'>Добавить</button>
                </div>
            </form>
        )
    }
}
