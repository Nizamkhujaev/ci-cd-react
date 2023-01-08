import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todos";
import { v4 as uuidv4 } from 'uuid'

function TodosForm() {
    const dispatch = useDispatch();

    const inputRef = useRef(null)
    const formRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodo({
            title: inputRef.current.value,
            isDone: false,
            id: uuidv4()
        }))

        formRef.current.reset();
    }

    return (
        <div className="card-body">
            <form
                className='d-flex justify-content-between'
                onSubmit={handleSubmit}
                ref={formRef}
                name="form"
            >

                <input
                    type="text"
                    className="form-control"
                    ref={inputRef}
                    placeholder="Add todo"
                />
                <button className="btn btn-success ms-3">Add</button>
            </form>
        </div>
    )
}

export default TodosForm
