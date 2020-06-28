import React from 'react';
import './App.css';

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

import tasks from './data/Tasks'


export default class App extends React.Component {
	state = {
		tasks: tasks,
	}

	addTask = (title, description) => {
		const newTask = {
			id: this.state.tasks.length + 1,
			title: title,
			description: description,
			done: false,
		}

		this.setState({
			tasks: [...this.state.tasks, newTask]
		})
	}

	deleteTask = (id) => {
		this.setState({
			tasks: this.state.tasks.filter(task => task.id !== id)
		})
	}

	checkDone = (id) => {
		this.setState({
			tasks: this.state.tasks.map(task =>  {
				if( task.id === id )
					task.done = !task.done;

				return task;
			})
		})
	}

	render() {
		return (
			<div className="App container">
				<TaskForm addTask={this.addTask} />

				<Tasks
					tasks={this.state.tasks}
					checkDone={this.checkDone}
					deleteTask={this.deleteTask} />

				<Posts />
			</div>
		)
	}
}
