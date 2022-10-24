import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import JobListingPanel from "../Components/JobListingPanel";
import '../css/index.css'
import '../css/listings.css'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";

export default function JobListings() {
	const navigate = useNavigate()
	// fetch job listings
	const [jobs, setJobs] = useState([])
	const [deleting, setDeleting] = useState(false)
	const [showDelete, setShowDelete] = useState(false)

	const get_openings = async ()=> {
		const response = await fetch('http://localhost:8000/job_openings')
		const openings = await response.json()
		setJobs(openings)
	}


	useEffect(()=>{
		get_openings()
	}, [jobs])
	

  return (
	<Container maxWidth="xl" >
		<h1>Job Openings</h1>
		<br/>
        <div className="listings-wrapper">
		<div className="listing-left-side">
			
			{
				jobs.map(item => 
					<JobListingPanel 
						key = {item.job_id} 
						id = {item.job_id}
						job_type = {item.job_type}
						title = {item.title}
						department = {item.department}
						location = {item.location}
						experience = {item.experience}
						showDelete = {showDelete}
					/>
				)

			}
		</div>
		
		<div className="listing-right-side">
			<div className="add-opening-box" onClick={() => {navigate('/new-opening')}}>
				<p>As a recuriter you can add new openings</p>
				<Chip icon={<AddCircleTwoToneIcon />} label="Click here to add" clickable/>
			</div>
			<br/>
			<div className="add-opening-box" >
				<p>As a recuriter you can delete openings</p>
				{
					!deleting 
					? <Chip icon={<DeleteTwoToneIcon />} label="Click here to delete" clickable onClick = {() => {setShowDelete(true); setDeleting(true)}}/>
					: <Chip icon={<DeleteTwoToneIcon />} label="Finish deleting" clickable onClick={() => {setShowDelete(false); setDeleting(false); }}/>
				}
			</div>
		</div>
		</div>

	</Container>
  );
}

/**/