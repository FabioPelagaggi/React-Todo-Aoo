import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TodoForm from './TodoForm'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	color: 'inherit',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

export default function KeepMountedModal({ addTodo }) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button color='inherit' onClick={handleOpen}>
				Add Task
			</Button>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby='keep-mounted-modal-title'
				aria-describedby='keep-mounted-modal-description'
			>
				<Box sx={style}>
					<TodoForm addTodo={addTodo} handleClose={handleClose} />
				</Box>
			</Modal>
		</div>
	)
}
