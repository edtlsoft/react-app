import React from 'react';
import './App.css';
import Tasks from './components/Tasks'
import tasks from './data/Tasks'

console.log(tasks)

function App() {
  return (
    <div className="App">
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
