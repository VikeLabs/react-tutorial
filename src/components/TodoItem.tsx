import React from 'react'
import { Todo } from '../services/todos'

interface Props extends React.PropsWithChildren<{}> {
    todo: Todo
}

const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

export const TodoItem: React.FC<Props> = ({
    todo,
}: Props): React.ReactElement => {
    return (
        <div style={style}>
            <input type="checkbox" checked={todo.completed} />
            <p>{todo.content}</p>
        </div>
    )
}
