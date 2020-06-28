import React from 'react';
import './App.css';

import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

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

	render() {
		return (
			<div className="App container">
				<TaskForm addTask={this.addTask} />

				<Tasks tasks={this.state.tasks} />
			</div>
		)
	}
}
