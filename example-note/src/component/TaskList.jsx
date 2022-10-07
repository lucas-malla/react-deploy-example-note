import TaskCard from './TaskCard';
function TaskList({tasks, deliteTask}) {    
    if(tasks.length === 0){
        return <h1>No tenes notas😆😋🙄</h1>
    }

  return (
    <div>
        {tasks.map((task) => (
                <TaskCard key={task.id} task={task} deliteTask={deliteTask}/>
            ))}
    </div>
  )
}

export default TaskList