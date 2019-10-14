import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(e) {
        const toggleStatus = !this.state.completed;

        this.setState({
            completed: toggleStatus
        });
        e.stopPropagation();
    }

    render() {
        const item = this.props.todoItem;
        let listClass = '';

        if (this.state.completed) {
            listClass = 'completed';
        }

        return (
            <li key={item.date}
                data-key={this.props.index}
                onClick={this.props.onClick}
                className={listClass}
            >
                <input
                    type="checkBox"
                    onClick={this.onCheck}
                />
                {item.text}
            </li>
        );
    }
}

export default Todo;
