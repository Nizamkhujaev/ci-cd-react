import { useDispatch } from "react-redux"
import { removeTodo, markTodoItem } from "../../redux/actions/todos"

function TodosItem({text, id, isDone}) {
    const dispatch = useDispatch(); 

    const handleMarkTodo = (e) => {
        dispatch(markTodoItem({
            id,
            text,
            isDone: e.target.checked
        }))
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    className='form-check-input me-3'
                    id={id}
                    onChange={handleMarkTodo}
                />
                <label className={`form-check-label ${isDone ? 'text-decoration-line-through' : ''}`} htmlFor={id}>
                    {text}
                </label>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => dispatch(removeTodo(id))}
            >Delete</button>
        </li>
    )
}

export default TodosItem
