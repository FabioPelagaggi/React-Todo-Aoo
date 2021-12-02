import React, { useEffect, useState } from 'react'
import './App.css'
import AddNewTask from './components/NewTask'
import TodoList from './components/TodoList'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storageTodos) {
			setTodos(storageTodos)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	function addTodo(todo) {
		setTodos([todo, ...todos])
	}

	function toggleComplete(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			})
		)
	}

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<div className='App' style={{ width: '100%' }}>
			<AppBar position='static' style={{ width: '100%' }}>
				<Toolbar>
					{/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						React MUI Todo App
					</Typography>
					<AddNewTask keepMounted addTodo={addTodo} />
				</Toolbar>
			</AppBar>
			<TodoList
				todos={todos}
				toggleComplete={toggleComplete}
				removeTodo={removeTodo}
			/>
		</div>
	)
}

export default App
