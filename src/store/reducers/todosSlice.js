import { createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		allTodos: []
	},
	reducers: {
		addTodo: {
			reducer(state, action) {
				state.allTodos.unshift(action.payload)
			},
			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
						completed: false
					}
				}
			}
		},
		markComplete(state, action) {
			const todoId = action.payload
			state.allTodos = state.allTodos.map(todo => {
				if (todo.id === todoId) todo.completed = !todo.completed
				return todo
			})
		},
		deleteTodo(state, action) {
			const todoId = action.payload
			state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		},
		async getAllTodos(state, action) {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos?_limit=5'
				)
				state.allTodos = response.data
			} catch (error) {
				console.log(error)
			}
		}
	}
})

// Reducer
const todosReducer = todosSlice.reducer

// Selector
export const todosSelector = state => state.todosReducer.allTodos

// Action export
export const {
	addTodo,
	markComplete,
	deleteTodo,
	getAllTodos
} = todosSlice.actions

// Export reducer
export default todosReducer
