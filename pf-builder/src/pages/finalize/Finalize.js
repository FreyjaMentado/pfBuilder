import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function Finalize() {
	return (
		<CardRoot title={"Finalize"}>
			<Typography variant="body2"  >
				option to print to pdf or maybe even save to account?
			</Typography>
		</CardRoot>
	);
}