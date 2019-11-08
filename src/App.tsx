import React from 'react'

import TodoList from './components/TodoList'
// import { Profile } from './components/Profile'

export const App: React.FC = () => {
    return (
        <div>
            <TodoList />
            {/* <Profile userId={'Hello!'}></Profile> */}
        </div>
    )
}
