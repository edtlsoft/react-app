import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component {
	styleComplete(done) {
		return {
			fontSize: '20px',
			color: done ? 'gray' : 'black',
			textDecoration: done ? 'line-through' : 'none',
		}
	}

	render() {
		const task = this.props.task

		return (
			<p style={ this.styleComplete(task.done) }>
				{task.id} - {task.title} - {task.description}
				<input type="checkbox" />
				<button style={btnDelete}>
					X
				</button>
			</p>
		)
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
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

export default Task