import { useState, useRef } from 'react';

const UseRef = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const [todosList, setTodosList] = useState([]);

  const inputEl = useRef(null);

  const handleChange = ({ currentTarget: { value } }) =>
    setNewTodoValue(value);

  const addTodo = ev => {
    ev.preventDefault();
    setTodosList(todoList => [...todoList, newTodoValue]);
    setNewTodoValue('');
    console.log({ inputEl });
    // inputEl.current.focus();
  }

  const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>);

  return (
    <div>
      <form>
        <input type='text' name='todo' value={newTodoValue} onChange={handleChange}
          ref={inputEl}
        />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  );
}

export default UseRef;