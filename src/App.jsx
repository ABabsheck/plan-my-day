import { useState } from "react"

function App(){

  const [task, setTask] = useState("")

  function addTask(){
    const task = document.querySelector("#task").value
    console.log(task)
  }

  return (
    <div>
      <h1>Plan my day</h1>
      <p>Make every day js count, one task at a time</p>
      <input type="text" id="task" />
      <button onClick={addTask}>Add task</button>
    </div>
  )
}

export default App