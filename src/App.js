import React from 'react';
import './App.css';

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

import tasks from './data/Tasks'


function App() {
  return (
    <div className="App container">
    	<TaskForm />

    	<Tasks tasks={tasks} />
    </div>
  );
}

export default App;
