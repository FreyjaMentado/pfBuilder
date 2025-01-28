// eslint-disable-next-line
import githubLogoWhite from './github-mark-white.png'
// eslint-disable-next-line
import linkedinLogoWhite from './In-White-72.png'
import githubLogoBlack from './github-mark.png'
import linkedinLogoBlack from './LI-In-Bug.png'
import profilePic from './profilePic.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FooterComp() {
	return (
		<footer>
			<br />
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
				<Box sx={{ textAlign: "center" }}>
					<a
						href="https://freyjamentado.github.io/"
						style={{ marginRight: '16px' }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={profilePic}
							alt="personal website"
							style={{
								borderRadius: '50%',
								width: '40px',
								height: '40px',
							}} />
					</a>
					<a
						href="https://www.linkedin.com/in/freyja-mentado/"
						style={{ marginRight: '16px' }}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={linkedinLogoBlack}
							alt="linkedin"
							width="40"
							height="40" />
					</a>
					<a
						href="https://github.com/FreyjaMentado"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={githubLogoBlack}
							alt="github"
							width="40"
							height="40" />
					</a>
					<Typography
						variant="body2"
						sx={{
							textAlign: 'center',
						}}>© 2025 Freyja Mentado. All Rights Reserved.</Typography>
				</Box>
			</Box>
			<br />
		</footer >
	);
}
