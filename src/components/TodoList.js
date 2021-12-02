import React from 'react'
import Todo from './Todo'
import { List } from '@mui/material'

function TodoList({ todos, toggleComplete, removeTodo }) {
	return (
		<List sx={{ width: '100%', minWidth: '100%', bgcolor: 'background.paper' }}>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleComplete={toggleComplete}
					removeTodo={removeTodo}
				/>
			))}
		</List>
	)
}
export default TodoList
