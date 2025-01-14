import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardRoot from '../../components/CardRoot';

export default function Race() {
	return (
		<CardRoot title={"Race"}>
			<Typography variant="body2"  >
				Races available: Dwarf, Elf, Gnome, Half-Elf, Halfling, Half-Orc, Human
			</Typography>
		</CardRoot>
	);
}