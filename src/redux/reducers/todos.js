import { ADD_TODO, DONE_TODO, INITIALIZE_TODOS, REMOVE_TODO } from '../types/todos'

const initialState = [];

const todos = (state = initialState, action) => {
    switch(action.type) {

        case ADD_TODO:
            return [...state, action.payload]

        case REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id)

        case DONE_TODO:
            return state.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone
                    }
                }
                return item
            })

        case INITIALIZE_TODOS:
            return action.payload

        default: return state
    }
}

export default todos