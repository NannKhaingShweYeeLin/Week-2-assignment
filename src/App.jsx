import { useState } from 'react'

function App() {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [todo,setTodos] = useState(undefined);

  const getData = async (e) => {
    e.preventDefault();
  
    if (id < 1) {
      setError(true);
      setId("");
      return;
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await response.json();
    setError(false);
    setTodos(data);
    setId("");
  }
  return (
    <section>
      <form onSubmit={getData}>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value)
          }} />
        <button type='submit'>Get Data</button>
      </form>
      <div>
        {
          error && (
            <h1>Please enter an valid id. (exanple 1, 2, 3,ect ...)</h1>
          )
        }
        {todo && (
          <div>
          <h1>id - {todo.id}</h1>
          <h1>title - {todo.title}</h1>
          <h1>userId - {todo.userId}</h1>
          <h1>completed - {" "}
            {todo.completed ? (
              <span>Completed</span>
              ) : (
              <span>Not Completed</span>
              )}</h1>
        </div>
      )}

      </div>
    </section>
  )
}

export default App;
