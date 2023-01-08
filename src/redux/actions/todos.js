import { ADD_TODO, DONE_TODO, REMOVE_TODO, INITIALIZE_TODOS } from "../types/todos"

const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: {
            ...item
        } 
    }
}

const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

const markTodoItem = (todoItem) => {
    return {
        type: DONE_TODO,
        payload: {
            ...todoItem
        }
    }
}

const initialStateTodos = (todos) => {
    return {
        type: INITIALIZE_TODOS,
        payload: todos
    }
}

export {
    addTodo,
    removeTodo,
    markTodoItem,
    initialStateTodos
}