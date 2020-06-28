import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component {
	styleComplete(done) {
		console.log('styleComplete', done)

		return {
			display: 'flex',
			justifyContent: 'space-between',
			fontSize: '20px',
			color: done ? 'gray' : 'black',
			textDecoration: done ? 'line-through' : 'none',
		}
	}

	checkedTask = () => true

	render() {
		console.log(this.props)
		const task = this.props.task

		return (
			<li className="list-group-item" style={this.styleComplete(task.done)}>
				<div>
					{task.id} - {task.title} - {task.description}
				</div>
				<div>
					<input
						type="checkbox"
						style={inputCheck}
						checked={task.done}
						onChange={this.checkedTask} />
					<button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
						X
					</button>
				</div>
			</li>
		)
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
}

const inputCheck = {
	transform: 'scale(3)',
}

const btnDelete = {
	fontSize: '18px',
	background: '#ea2027',
	color: '#fff',
	border: 'none',
	padding: '10px 15px',
	borderRadius: '50%',
	cursor: 'pointer',
	marginLeft: '20px',
}

export default Task