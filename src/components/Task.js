import React from 'react'
import './Task.css'

class Tasks extends React.Component {
	render() {
		const task = this.props.task

		return (
			<p className="red">
				{task.id} - {task.title} - {task.description}
				<input type="checkbox" />
				<button style={btnDelete}>
					X
				</button>
			</p>
		)
	}
}

const btnDelete = {
	fontSize: '18px',
	background: '#ea2027',
	color: '#fff',
	border: 'none',
	padding: '10px 15px',
	borderRadius: '50%',
	cursor: 'pointer',
}

export default Tasks