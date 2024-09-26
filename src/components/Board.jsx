import { useState } from 'react';
import Task from './Task';

const Board = () => {
  const [totalTasks, setTotalTasks] = useState(2);
  const [tasks, setTasks] = useState([{ id: 0 }, { id: 1 }]);

  const increment = () => {
    setTimeout(() => {
      // Simulating a blocking function before increment
      // blockingFunction();

      // Create a new task with a unique ID
      const newTask = { id: tasks.length }; 
      setTasks([...tasks, newTask]);
      setTotalTasks(totalTasks + 1);
    }, 500);
  };

  const cloneTask = (id) => {
    setTimeout(() => {
      // Simulating a blocking function before cloning
      // blockingFunction();

      // Clone the task with a new ID
      const clonedTask = { id: tasks.length, clonedFrom: id };
      setTasks([...tasks, clonedTask]);
      setTotalTasks(totalTasks + 1);
    }, 500);
  };

  return (
    <div className="container">
      <h2>Tasks ({totalTasks})</h2>
      <button onClick={increment}>Create Task</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <Task id={task.id} />
            <button onClick={() => cloneTask(task.id)}>Clone Task {task.id}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
