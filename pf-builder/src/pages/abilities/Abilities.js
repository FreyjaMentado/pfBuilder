import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function Abilities() {
	return (
		<CardRoot title={"Abilities"}>
			<Typography variant="body2"  >
				Page to assign abilities to main 6 stats. will need to pull stat info from race and maybe feats and class as well.
				<br />
				options for point buy or rolled stats with ability to roll stats in here.
			</Typography>
		</CardRoot>
	);
}