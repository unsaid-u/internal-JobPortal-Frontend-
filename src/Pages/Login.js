import React, { useState } from 'react';
import {auth} from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import '../css/login.css'
import '../css/index.css'
import { useNavigate } from 'react-router';
import { Container } from '@mui/system';
import { Button, TextField } from '@mui/material';


export default function LoginPage(){

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()

	const handleSubmit = () => {
		// login using firebase
		signInWithEmailAndPassword(auth, email, password)
		.then(() => navigate('/'))
	}

	return(
		<div className='login-form-wrapper'>
			<Container maxWidth="xs">
				<h1>Login</h1>
				<hr/>
				<TextField
					label = "Email"
					variant='outlined'
					fullWidth
					required
					value={email}
					name="email"
					onChange = {(e) => {setEmail(e.target.value)}}
				/>
				<br/><br/>
				<TextField
					label = "Password"
					variant='outlined'
					type='password'
					fullWidth
					required
					value={password}
					name="password"
					onChange = {(e) => {setPassword(e.target.value)}}
				/>	
				<br/><br/>

				<Button variant='contained' type='submit' fullWidth onClick={handleSubmit}>LOGIN</Button>
			</Container>
		</div>
	)
}