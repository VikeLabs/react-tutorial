import React, { Component } from 'react'

interface Props {
    userId: string
    altText?: string
}

interface State {
    username: string
    age: number
}

async function getData() {
    return Promise.resolve({
        username: 'bob',
        age: 28,
    })
}

export class Profile extends Component<Props, State> {
    state = {
        username: '',
        age: 0,
    }

    async componentDidMount() {
        const userData = await getData()
        this.setState(userData)
    }

    render() {
        return (
            <div>
                <h1>{this.props.userId}</h1>
                <p>{this.state.username}</p>
                <p>{this.state.age}</p>
            </div>
        )
    }
}
