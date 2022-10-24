import { Container } from '@mui/material';
import React, {useState} from 'react';
import { useEffect } from 'react';
import '../css/index.css'
import ApplicationTile from './ApplicationTile';

export default function ApplicationsTable(props){
	console.log(props.applications)

	// const [applications, setApplications] = useState([])
	// const get_applications = async ()=>{
	// 	const response = await fetch(`http://localhost:8000/applications/${props.jobID}`)
	// 	const data = await response.json()
	// 	console.log(data)
	// 	setApplications(data)
	// }

	// useEffect(()=>{
	// 	get_applications()
	// //	console.log(applications)
	// }, [props.jobID])

	return(
		<div>
			<hr/>
			<br/>
			<h2>Applications List</h2>
			<p>{props.applications[0].name}</p>
			<br/>
			{
				props.applications.length > 0 
				? props.applications.map(item =>{
					<ApplicationTile
						key = {item.app_id}
						app_id = {item.app_id}
						current_title = {item.current_title}
						experience = {item.experience}
						current_org = {item.current_org}
						status = {item.status}
						job_id = {item.job_id}
						name = {item.name}
						cv = {item.cv}
						email = {item.email}
					/>
				})
				: <p>No applications for this job opening</p>
			}
		</div>
	)
}