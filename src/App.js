import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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
				<Router>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
					  <a className="navbar-brand" href="#">ReactApp</a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item">
					        <Link to="/" className="nav-link" activeClassName="active">
					        	TaskList
					        </Link>
					      </li>
					      <li className="nav-item">
					        <Link to="/posts" className="nav-link" activeClassName="active">
					        	Posts
					        </Link>
					      </li>
					    </ul>
					  </div>
					</nav>

					<Route exact path="/" render={() => {
						return (
							<div>
								<TaskForm addTask={this.addTask} />

								<Tasks
									tasks={this.state.tasks}
									checkDone={this.checkDone}
									deleteTask={this.deleteTask} />
							</div>

						)
					}} />

					<Route path="/posts" component={Posts} />
				</Router>
			</div>
		)
	}
}
