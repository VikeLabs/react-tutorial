import React, { Component } from 'react'
import { TodoItem } from './TodoItem'
import { getTodos, Todo } from '../services/todos'

interface Props {
    // Props
    style?: React.CSSProperties
}

interface State {
    todos: Todo[]
}

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default class TodoList extends Component<Props, State> {
    state = {
        todos: [],
    }

    async componentDidMount() {
        try {
            const todos = await getTodos()
            this.setState({ todos: todos })
        } catch (err) {
            console.error('Could not get todos')
            throw new Error(err)
        }
    }

    render() {
        return (
            <div style={{ ...style, ...this.props.style }}>
                <h1>Todo List</h1>
                {this.state.todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </div>
        )
    }
}
