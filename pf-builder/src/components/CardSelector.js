import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

export default function CardSelector({ children, title, value, onChange }) {
	return (
		<Card sx={{ 
			backgroundColor: 'transparent',
			marginTop: 2,
			marginRight: 2,
			marginLeft: 2,
		}}>
			<CardContent>
				<Typography 
					gutterBottom 
					variant="h6" 
					component="div"
				>
					{title}
				</Typography>
				<Select
					value={value}
					onChange={onChange}
					fullWidth
					displayEmpty
				>
					{children}
				</Select>
			</CardContent>
		</Card>
	);
}

