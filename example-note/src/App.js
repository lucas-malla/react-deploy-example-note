import TaskFrom from './component/TaskFrom';
import TaskList from './component/TaskList';
import {tasks as data} from './date/tasks';
import React, {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        setTasks(data)
    },[])

    function createTask(task){
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
    }


  return (
    <div className="App">
         <TaskFrom  createTask={createTask}/>
         <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
