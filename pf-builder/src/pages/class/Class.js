import * as React from 'react';
import { MenuItem, Typography } from '@mui/material';
import CardSelector from '../../components/CardSelector';
import CardRoot from '../../components/CardRoot';

export default function Class() {
	const [selectedClass, setSelectedClass] = React.useState('');

	const handleClassChange = (event) => {
		setSelectedClass(event.target.value);
	};

	const classes = [
		'Barbarian', 'Bard', 'Cleric', 'Druid',
		'Fighter', 'Monk', 'Paladin', 'Ranger',
		'Rogue', 'Sorcerer', 'Wizard'
	];

	return (
		<div>
			<CardRoot title={"Class"}>
				<Typography variant="body2"  >
					Choose a class
				</Typography>
			</CardRoot>
			<CardSelector
				title={"Class"}
				value={selectedClass}
				onChange={handleClassChange}
			>
				{classes.map((cls) => (
					<MenuItem key={cls} value={cls}>
						{cls}
					</MenuItem>
				))}
			</CardSelector>
		</div>
	);
}
