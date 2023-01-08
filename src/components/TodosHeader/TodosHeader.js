import { useSelector } from 'react-redux'

function TodosHeader() {

    const todos = useSelector(state => state.todos)

    return (
        <div className="card-header">
            <h1>Todos: {todos?.length}</h1>
        </div>
    )
}

export default TodosHeader
