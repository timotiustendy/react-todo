import React, { Component } from 'react';
import TodoItem from './Todo.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todoItems: [],
            keyword: '',
            selectedIndex: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value,
            keyword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newItem = { text: this.state.text, date: Date.now() };
        const todoItems = this.state.todoItems;
        const selectedIndex = this.state.selectedIndex;

        if (selectedIndex != null) {
            todoItems[selectedIndex] = newItem;

            this.setState({
                todoItems: todoItems,
                keyword: '',
                selectedIndex: null
            });
        }else{
            this.setState({
                todoItems: [...todoItems, newItem],
                keyword: ''
            });
        }
    }

    onClick(e) {
        const key = e.target.getAttribute('data-key');
        const data = this.state.todoItems[key];
        console.log(data);

        this.setState({
            text: data.text,
            keyword: data.text,
            selectedIndex: key
        });
    }

    render() {
        const todoItems = this.state.todoItems;

        return (
            <section>
               <form onSubmit={this.onSubmit}>
                    <input value={this.state.keyword}
                           onChange={this.onChange}
                           type="text"
                    />
                    <button type="submit">Add Item</button>
                </form>
                <ul>
                {
                    todoItems.map((todoItem, index) =>
                        <TodoItem
                            index={index}
                            key={todoItem.date}
                            todoItem={todoItem}
                            onClick={this.onClick}
                        />
                    )
                }
                </ul>
            </section>
        );
    }
}

export default TodoList;
