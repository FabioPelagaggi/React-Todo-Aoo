import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/base/TextareaAutosize'

function TodoForm({ addTodo, handleClose }) {
	const [todo, setTodo] = useState({
		id: '',
		title: '',
		description: '',
		date: '',
		completed: false,
	})

	function handleTitleInputChange(e) {
		setTodo({ ...todo, title: e.target.value })
	}
	function handleDescriptionInputChange(e) {
		setTodo({ ...todo, description: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (todo.title.trim()) {
			addTodo({ ...todo, id: Date.now(), date: new Date().toLocaleDateString('en-GB') })
			setTodo({ ...todo, title: '', description: '' })
		}
		handleClose()
	}

	return (
		<form className="todo-form-main" onSubmit={handleSubmit}>
			<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
				New Task
			</Typography>
			<div className="todo-form">
				<TextField
					label='Title'
					name='title'
					type='title'
					value={todo.title}
					onChange={handleTitleInputChange}
					sx={{ margin: 2 }}
					required
				/>
				<TextareaAutosize
					placeholder="Description..."
					name='description'
					type='description'
					value={todo.description}
					onChange={handleDescriptionInputChange}
					style={{ width: 300, height: 100 }}
				/>
			</div>
			<Button type='submit'>submit</Button>
		</form>
	)
}
export default TodoForm
