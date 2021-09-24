import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5 th',
      reminder: true,
    },
    {
      id: 2,
      text: 'write some javascript',
      day: 'Sep 24 th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Watch tutorial',
      day: 'Sep 23',
      reminder: false,
    }
  ])
  return (
    <div className="container">
      <Header />
      <h1>Hello From REACT</h1>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
