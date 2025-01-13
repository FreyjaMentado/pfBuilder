import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function Skills() {
	return (
		<CardRoot title={"Skills"}>
			<Typography variant="body2"  >
				List of all skills and able to assign ranks
			</Typography>
		</CardRoot>
	);
}