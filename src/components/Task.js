import React from 'react'

class Tasks extends React.Component {
	render() {
		const task = this.props.task

		return (
			<p>
				{task.id} - {task.title} - {task.description}
				<input type="checkbox" />
				<button>X</button>
			</p>
		)
	}
}

export default Tasks