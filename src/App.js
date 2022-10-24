import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AddNewJobForm from './Pages/AddNewJobForm';
import ApplyJobForm from './Pages/ApplyJobForm';
import JobDescription from './Pages/JobDescription';
import JobListings from './Pages/JobListings';
import Login from './Pages/Login'

export default function App(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<NavBar/>}>
					<Route index element={<JobListings/>}/>
					{/* <Route path='/login' element={<Login/>}/> */}
					<Route path='/:jobID' element={<JobDescription/>}/>
					<Route path='/apply/:jobID' element={<ApplyJobForm/>}/>
					<Route path='/new-opening' element={<AddNewJobForm/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}