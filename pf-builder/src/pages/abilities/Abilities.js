import * as React from 'react';
import { Box, MenuItem, Typography, FormControl, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';

export default function Abilities() {
	const [selectedClass, setSelectedClass] = React.useState('');

	const handleChange = (event) => {
		setSelectedClass(event.target.value);
	};

	return (
		<div>
			<Box sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}>
				<Typography variant="body2">
					Ability Scores
				</Typography>
				<br />
				<FormControl fullWidth>
					<InputLabel>Choose a generation method</InputLabel>
					<Select
						label="Choose a generation method"
						onChange={handleChange}
					>
						<MenuItem value={10}>Standard Array</MenuItem>
						<MenuItem value={20}>Point Buy</MenuItem>
						<MenuItem value={30}>Manual/Rolled</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}