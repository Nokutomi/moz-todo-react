// import logo from './logo.svg';
// import './App.css'; // per-component stylesheet ?

// function App(props) {
//   const subject = props.subject;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, {subject}!
//         </p>
//       </header>
//     </div>
//   );
// }
import React, { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function App(props) {
  // console.log(props.tasks)

  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    // console.log(tasks[0]);
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    // console.log(id);
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id} 
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    )
  );
      /* <Todo name="Eat" completed={true} id="todo-0" />
         <Todo name="Sleep" completed={false} id="todo-1" />
         <Todo name="Repeat" completed={false} id="todo-2" /> */
  
  function addTask(name) {
    const newTask = {id:"todo-"+nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }
  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />        
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
