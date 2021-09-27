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

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
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
