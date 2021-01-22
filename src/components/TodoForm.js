import React, { useState } from 'react'

const TodoForm = () => {
	const [title, setTitle] = useState('')

	const changeTitle = event => {
		setTitle(event.target.value)
	}

	const addSingleTodo = event => {
		event.preventDefault()
		console.log(title)
	}

	return (
		<div>
			<form onSubmit={addSingleTodo}>
				<input type='text' value={title} onChange={changeTitle} />
				<input type='submit' value='Add' />
			</form>
		</div>
	)
}

export default TodoForm
