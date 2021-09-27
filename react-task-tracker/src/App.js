import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  //Delete Task
  const deleteTask = async(id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
    ? setTasks(tasks.filter((task) => task.id !==id))
    : alert('Error Deleting This Task')
  }

  return (
    <div className="container">
      <div className="App">
        <Header />
        <h1>Hello From REACT</h1>
      </div>    
    </div>
  );
}

export default App;
