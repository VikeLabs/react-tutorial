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

const defaultStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default class TodoList extends Component<Props, State> {
    state: State = {
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

    onComplete = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const newTodos = [...this.state.todos]
        newTodos[index].completed = !newTodos[index].completed
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div
                style={{
                    ...defaultStyle,
                    ...this.props.style,
                }}
            >
                <h1>Todo List</h1>
                {this.state.todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        onComplete={event => {
                            this.onComplete(index, event)
                        }}
                    />
                ))}
            </div>
            // <h1>Hello World</h1>
        )
    }
}
