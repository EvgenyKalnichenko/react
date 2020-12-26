import React, {Component} from 'react';

export default class CurrentList extends Component {

    render() {

        return (
          <div className='current-list'>
              Всего: {this.props.toDo}. Завершенных: {this.props.done}
          </div>
        )
    }
}
