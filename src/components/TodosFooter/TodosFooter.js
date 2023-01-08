import { useSelector } from 'react-redux'

function TodosFooter() {
    const todos = useSelector(state => state.todos)

    function handleSave() {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }

    return (
        <div className="card-footer d-flex justify-content-end">
            <button
                className="btn btn-primary"
                onClick={handleSave}
            >Save</button>
          </div>
    )
}

export default TodosFooter
