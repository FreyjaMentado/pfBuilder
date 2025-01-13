import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardRoot({ children, title }) {
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
				<Typography> 
					{children}
				</Typography>
			</CardContent>
		</Card>
	);
}
