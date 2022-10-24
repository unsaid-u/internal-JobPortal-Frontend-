import React, { useState } from "react";
import {  Chip } from "@mui/material";
import "../css/index.css";
import "../css/application.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CancelIcon from "@mui/icons-material/Cancel";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Zoom from '@mui/material/Zoom';
import { useNavigate } from "react-router-dom";

export default function ApplicationTile(props) {
	
	const navigate = useNavigate()
	const [showStatusDropdown, setShowStatusDropdown] = useState(false);
	const [status, setStatus] = useState("");
	const [jobID, setJobID] = useState(props.job_id)

	const deleteApplication = async() => {
		await fetch(`http://localhost:8000/applications/delete/${props.app_id}`,{method:'DELETE', mode:'cors'})
	
	};

	
	const changeStatus = async() => {
		// PUT request in db
		// await fetch(`http://localhost:8000/applications/status/${props.app_id}`,{
		// 	method : 'PUT',
		// 	mode : 'cors',
		// 	body : JSON.stringify({
		// 		'status' : status
		// 	})
		// })
	};

	return (
		<div className="candidate-tile-wrapper">
			<div className="candidate-tile-1">
				<small>{props.app_id}</small>
				<p id="name">{props.name}</p>
				<p>{props.email}</p>
				
			</div>

			<div className="candidate-tile-2">
				<span className="spans">{props.current_title} @ {props.current_org} </span>
				<p><b>{props.experience} years</b></p>

			</div>
			<Chip label={props.status} size="large" className="candidate-tile-3"/>

			
			<div className="side-options candidate-tile-4">
				<Tooltip title="View CV" TransitionComponent={Zoom}>
  					<IconButton >
					  <a href={props.cv} target="_blank"><AttachmentIcon /></a>
					</IconButton>
				</Tooltip>

				<Tooltip title="Change Status" TransitionComponent={Zoom}>
  					<IconButton onClick={() => setShowStatusDropdown(true)}>
					  <ChangeCircleIcon />
					</IconButton>
				</Tooltip>
		
				{showStatusDropdown && (
					<>
						<FormControl sx={{ width: 150, marginLeft: "5px" }}>
							<InputLabel id="demo-simple-select-label">Status</InputLabel>
							<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={status}
							label="Status"
							onChange={(e) => setStatus(e.target.value)}
							required
							size="small"
							>
							{/* add departments */}
							<MenuItem value={"Review"}>Review</MenuItem>
							<MenuItem value={"Online Assessment"}>Online Assessment</MenuItem>
							<MenuItem value={"F2F"}>F2F</MenuItem>
							<MenuItem value={"Onboarding"}>Onboarding</MenuItem>
							</Select>
						</FormControl>
						<CheckCircleIcon onClick={changeStatus} />
						<CancelIcon onClick={() => setShowStatusDropdown(false)} />
					</>
				)}

				<br />

				<Tooltip title="Delete" TransitionComponent={Zoom}>
  					<IconButton onClick={deleteApplication}>
					  <DeleteForeverIcon />
					</IconButton>
				</Tooltip>
			</div>	

			
		</div>
	);
}


