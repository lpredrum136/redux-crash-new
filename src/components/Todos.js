import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	todosSelector,
	markComplete,
	deleteTodo
} from '../store/reducers/todosSlice'
import TodoForm from './TodoForm'

const Todos = () => {
	const todos = useSelector(todosSelector)

	const dispatch = useDispatch()

	const toggleTodoCompleted = todoId => {
		// console.log(todoId)
		dispatch(markComplete(todoId))
	}

	const deleteSingleTodo = todoId => {
		dispatch(deleteTodo(todoId))
	}

	return (
		<div className='todo-list'>
			<TodoForm />
			<ul>
				{todos.map(todo => (
					<li key={todo.id} className={todo.completed ? 'completed' : ''}>
						{todo.title}
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={toggleTodoCompleted.bind(this, todo.id)}
						/>
						<button onClick={deleteSingleTodo.bind(this, todo.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
