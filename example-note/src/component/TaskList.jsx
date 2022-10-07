import { useContext } from 'react';
import TaskCard from './TaskCard';
import {TaskContext} from './context/TaskContext';

function TaskList() {
  const {tasks} = useContext(TaskContext)
  
    if(tasks.length === 0){
        return <h1 className='text-ellipsis text4x1 font-bold text-center'>No tenes notas😆😋🙄</h1>
    }

  return (
    <div className='grid grid-cols-4 gap-2 p-4 rounded-md'>
        {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
    </div>
  )
};

export default TaskList;