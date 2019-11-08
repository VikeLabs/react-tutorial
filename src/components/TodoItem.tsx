import React from 'react'
import { Todo } from '../services/todos'

interface Props extends React.PropsWithChildren<{}> {
    todo: Todo
    onComplete: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

export const TodoItem: React.FC<Props> = ({
    todo,
    onComplete,
}: Props): React.ReactElement => {
    return (
        <div style={style}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onComplete}
            />
            <p>{todo.content}</p>
        </div>
    )
}
