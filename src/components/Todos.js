import React from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/todosSlice'

const Todos = () => {
	const todos = useSelector(todosSelector)

	return (
		<div className='todo-list'>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
