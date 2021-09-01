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
import React from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

function App(props) {
  console.log(props.tasks)
  const taskList = props.tasks.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id} 
      />
    )
  );
      /* <Todo name="Eat" completed={true} id="todo-0" />
         <Todo name="Sleep" completed={false} id="todo-1" />
         <Todo name="Repeat" completed={false} id="todo-2" /> */

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />        
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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
