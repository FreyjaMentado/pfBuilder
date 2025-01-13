import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, useLocation } from "react-router-dom";

const pages = ["Home", "Class", "Race", "Abilities", "Skills", "Equipment", "Finalize"];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<AppBar
				position="static"
				sx={{
					backgroundColor: '#c9a0dc',
				}}
			>
				<Container maxWidth="xl">
					<Toolbar
						disableGutters
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
						}}
					>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="#000"
							>
								<MenuIcon />
							</IconButton>
							<Typography
								marginTop={1}
								marginLeft={1}
								variant="h5"
								sx={{ color: "#000" }}
							>
								Pathbuilder 1E
							</Typography>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
								keepMounted
								transformOrigin={{ vertical: 'top', horizontal: 'left' }}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{ display: { xs: 'block', md: 'none' } }}
							>
								{pages.map((page) => (
									<MenuItem
										key={page}
										component='a'
										href={`#/${page}`}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
							<Typography
								marginTop={2}
								marginRight={1}
								variant="h5"
								component="a"
								href="/"
								sx={{ color: "#000", textDecoration: 'none' }}
							>
								Pathbuilder 1E
							</Typography>
							{pages.map((page) => {
								// Compare the current location's hash with the page link
								const isActive = location.pathname === `/${page}`;
								return (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										component='a'
										href={`#/${page}`}
										sx={{
											my: 2,
											color: isActive ? '#FFF' : '#000',  // Change text color for active state
											backgroundColor: isActive ? '#7b5ea7' : 'transparent',  // Highlight the active button
											display: 'block',
											borderRadius: 1,
											fontWeight: isActive ? 'bold' : 'normal'  // Optionally add bold font weight for active state
										}}
									>
										{page}
									</Button>
								);
							})}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto', minHeight: '100vh', width: '100%', maxWidth: 600 }}>
				<Outlet />
			</Box>
		</div>
	);
}
