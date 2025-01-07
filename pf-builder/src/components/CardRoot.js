import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardRoot({ children, title }) {
	return (
		<Card sx={{ 
			backgroundColor: 'transparent',
			boxShadow: 'none', // Removes the card's drop shadow
		}}>
			<CardContent>
				<Typography 
					gutterBottom 
					variant="h6" 
					component="div"
					sx={{ color: '#00ff00' }} // Green color for the title
				>
					{title}
				</Typography>
				<Typography sx={{ color: '#00ff00' }}> 
					{children}
				</Typography>
			</CardContent>
		</Card>
	);
}
