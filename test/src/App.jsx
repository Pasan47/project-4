import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if(task.trim()) {
      setTodos([...todos, {Text: task, completed: false}])
      setTask('')
    }
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <h1>Todo List</h1>
        <div className="input-section">
          <input type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add a new task' />

          <button onClick={addTodo}>Submit</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : '' }>
              <span onClick={() => toggleTodo(index)} > {todo.Text} </span>
              <button onClick={() => deleteTodo(index) } >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
