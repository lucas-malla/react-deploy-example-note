import TaskFrom from './component/TaskFrom';
import TaskList from './component/TaskList';

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className='container mx-auto bg-yellow-200 p-10'>
         <TaskFrom />
         <TaskList />
      </div>
    </main>
  );
}

export default App;
