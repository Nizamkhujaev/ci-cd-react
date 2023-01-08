import './assets/styles/main.scss'

import { useEffect } from 'react';

import TodosFooter from './components/TodosFooter/TodosFooter';
import TodosHeader from './components/TodosHeader/TodosHeader';
import TodosForm from './components/TodosForm/TodosForm';
import TodoItems from './components/TodoItems/TodoItems';

import { initialStateTodos } from './redux/actions/todos'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const allTodos = window.localStorage.getItem('todos')
    dispatch(initialStateTodos(JSON.parse(allTodos)))
  })

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <div className="card mt-5">

          <TodosHeader />

          <TodosForm />

          <TodoItems />

          <TodosFooter />

        </div>
      </div>
    </div>
  );
}

export default App;
