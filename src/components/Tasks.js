import React from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

class Tasks extends React.Component {
	render() {
		return (
			<div>
				<ul className="list-group">
					{ this.props.tasks.map(task =>
						<Task
							task={task}
							key={task.id}
							deleteTask={this.props.deleteTask} />
					) }
				</ul>
			</div>
		)
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired
}

export default Tasks