import React from 'react'

export default class Posts extends React.Component {
	state = {
		posts: [],
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()

		this.setState({
			posts: data
		})
	}

	render() {
		return (
			<div>
				<h1>Posts</h1>
				{ this.state.posts.map(post => {
					return (
						<div key={post.id}>
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</div>
					)
				}) }
			</div>
		)
	}
}