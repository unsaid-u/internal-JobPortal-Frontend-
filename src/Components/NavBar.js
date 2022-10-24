import { Button } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../css/nav.css'
import { auth } from '../firebase';
import '../css/index.css'

export default function NavBar(){

	// const [login, setLogin] = useState(false)
	// const [user, setUser] = useState("")
	// const navigate = useNavigate()

	// onAuthStateChanged(auth, (user) => {
	// 	if(user){
	// 		setLogin(true)
	// 		setUser(auth.currentUser.email)
	// 	}	
	// 	else
	// 		setLogin(false)
	// })

	// const handleLogout = ()=>{
	// 	signOut(auth)
	// }

	// const handleLogin = ()=>{
	// 	navigate('/login')
	// }

	return(
		<>
			<div className='nav-bar'>
				<div><h2>LOGO</h2></div>
				{/* <div>
					{
						login 
						? <span> {user}  | <Button variant='outlined' onClick={handleLogout}>Logout</Button></span> 
						: <Button variant='outlined' onClick={handleLogin}>Login</Button>
					}
				</div> */}
			</div>
			<br/>
			<Outlet/>

			<br/>
			<br/>
		</>
	)
}