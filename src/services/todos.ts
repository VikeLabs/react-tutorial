export interface Todo {
    completed: boolean
    content: string
}

export async function getTodos(): Promise<Todo[]> {
    return Promise.resolve([
        {
            completed: false,
            content: 'ECE 355 A4',
        },
        {
            completed: false,
            content: 'SENG 350 Milesetone 3.5',
        },
        {
            completed: false,
            content: 'CSC 370 A3',
        },
    ])
}

export async function saveTodos(todos: Todo[]) {
    // Save the todos
    console.log(`Saving todos: ${todos}`)
    return Promise.resolve(todos)
}
