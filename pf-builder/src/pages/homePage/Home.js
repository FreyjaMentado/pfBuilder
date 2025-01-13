import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function Home() {
	return (
		<CardRoot title={"Home"}>
			<Typography variant="body2"  >
				home page
			</Typography>
		</CardRoot>
	);
}