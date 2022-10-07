import {TaskContext} from './context/TaskContext';
import {useContext} from 'react';

function TaskCard({task}) {
  const {deliteTask} = useContext(TaskContext);

  return (
        <di>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deliteTask(task.id)}>
                Delite task!!!
            </button>
         </di>
  )
}

export default TaskCard;