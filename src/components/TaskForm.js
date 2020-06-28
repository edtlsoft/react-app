import React from 'react'

export default class TaskForm extends React.Component {
	state = {
		title: '',
		description: '',
		done: false,
	}

	submitTask = e => {
		e.preventDefault()
		console.log('Enviando...', this.state)
	}

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<form className="my-5" onSubmit={this.submitTask}>
				<div className="form-group">
					<input
						type="text"
						name="title"
						className="form-control"
						placeholder="Write a task"
						onChange={this.change}
						value={this.state.title} />
				</div>
				<div className="form-group">
					<textarea
						name="description"
						className="form-control"
						placeholder="Write a description"
						onChange={this.change}
						value={this.state.description} >
					</textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Save Task
				</button>
			</form>
		)
	}
}