import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from '@mui/material'
import ClosedIcon from '@mui/icons-material/Close'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function Todo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id)
	}
	function handleRemoveClick() {
		removeTodo(todo.id)
	}

	return (
		<ListItem>
			<Card sx={{ minWidth: '100%' }}>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						p: 2,
						mr: 1,
						bgcolor: 'background.paper',
					}}
				>
					<Checkbox color='success' onClick={handleCheckboxClick} />
					<Card sx={{ p: 1, alignSelf: 'center', flexShrink: 0 }}>
						<Typography
							sx={{
								fontSize: 18,
								textDecoration: todo.completed ? 'line-through' : null,
								flexShrink: 2
							}}
							color='text.secondary'
							gutterBottom
						>
							{todo.title}
						</Typography>
					</Card>

					<Typography
						variant='body2'
						sx={{
							fontSize: 14,
							textDecoration: todo.completed ? 'line-through' : null,
							alignSelf: 'center',
							pl: 5,
							width: '80%'
						}}
					>
						{todo.description}
					</Typography>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							p: 2,
							mr: 6,
							bgcolor: 'background.paper',
						}}
					>
						<Typography
							sx={{
								fontSize: 12,
								alignSelf: 'end',
							}}
							color='text.secondary'
							gutterBottom
						>
							{todo.date}
						</Typography>
						<IconButton onClick={handleRemoveClick} sx={{ alignSelf: 'end' }}>
							<ClosedIcon />
						</IconButton>
					</Box>
				</CardContent>
			</Card>
		</ListItem>
	)
}
export default Todo
