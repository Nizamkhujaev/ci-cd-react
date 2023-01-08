import TodosItem from "../TodosItem/TodosItem"
import { useSelector } from 'react-redux'

function TodoItems() {

    const todos = useSelector(state => state.todos)
    // const savedTodos = window.localStorage.getItem()

    return (
        <ul className="list-group list-group-flush">
            {
                todos?.length > 0 ? (
                    todos?.map(item => (
                        <TodosItem
                            key={item.id}
                            text={item.title}
                            id={item.id}
                            isDone = {item.isDone}
                        />
                    ))
                ) : <h3 className="text-center text-muted p-2">Todos not created yet</h3>
            }
        </ul>
    )
}

export default TodoItems
