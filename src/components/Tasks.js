import React from 'react'
import Task from './Task'

class Tasks extends React.Component {
	render() {
		return (
			<div>
				{ this.props.tasks.map(task => <Task task={task} key={task.id} />) }
			</div>
		)
	}
}

export default Tasks