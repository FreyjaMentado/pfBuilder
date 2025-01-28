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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const pages = ["Home", "Class", "Race", "Abilities", "Skills", "Equipment", "Finalize"];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation();
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const currentIndex = pages.findIndex(page => `/${page.toLowerCase()}` === location.pathname.toLowerCase());

	const handleNext = () => {
		if (currentIndex === -1) {
			navigate(`/${pages[1].toLowerCase()}`);
		} else if (currentIndex < pages.length - 1) {
			navigate(`/${pages[currentIndex + 1].toLowerCase()}`);
		}
	};

	const handlePrevious = () => {
		if (currentIndex > 0) {
			navigate(`/${pages[currentIndex - 1].toLowerCase()}`);
		} else if (currentIndex === -1) {
			navigate('/');
		}
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
										href={`#/${page.toLowerCase()}`}
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
								const normalizedPath = location.pathname.toLowerCase() === '/' ? '/home' : location.pathname.toLowerCase();
								const isActive = normalizedPath === `/${page.toLowerCase()}`;
								return (
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										component='a'
										href={`#/${page.toLowerCase()}`}
										sx={{
											my: 2,
											color: isActive ? '#FFF' : '#000',
											backgroundColor: isActive ? '#7b5ea7' : 'transparent',
											display: 'block',
											borderRadius: 1,
											fontWeight: isActive ? 'bold' : 'normal',
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
			<Box
				sx={{
					display: { xs: 'none', md: 'flex' },
					justifyContent: 'center',
					minHeight: '100vh',
					width: '100%',
					marginTop: 2
				}}
			>
				<Button
					variant="contained"
					onClick={handlePrevious}
					disabled={currentIndex <= 0}
					sx={{
						height: 40,
						minWidth: '80px',
						backgroundColor: currentIndex > 0 ? '#7b5ea7' : '#aaa',
						marginRight: 1,
						marginTop: 2
					}}
				>
					Previous
				</Button>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						maxWidth: 700
					}}
				>
					<Outlet />
				</Box>
				<Button
					variant="contained"
					onClick={handleNext}
					disabled={currentIndex >= pages.length - 1}
					sx={{
						height: 40,
						minWidth: '80px',
						backgroundColor: currentIndex < pages.length - 1 ? '#7b5ea7' : '#aaa',
						marginLeft: 1,
						marginTop: 2
					}}
				>
					Next
				</Button>
			</Box>
			<Box
				sx={{
					display: { xs: 'flex', md: 'none' },
					justifyContent: 'center',
					minHeight: '100vh',
					width: '100%',
					marginTop: 2,
					position: 'relative',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						position: 'fixed',
						bottom: 0, 
						width: '100%',
					}}
				>
					<Button
						variant="contained"
						onClick={handlePrevious}
						disabled={currentIndex <= 0}
						sx={{
							height: 40,
							width: '50%',
							backgroundColor: currentIndex > 0 ? '#7b5ea7' : '#aaa',
						}}
					>
						Previous
					</Button>
					<Button
						variant="contained"
						onClick={handleNext}
						disabled={currentIndex >= pages.length - 1}
						sx={{
							height: 40,
							width: '50%',
							backgroundColor: currentIndex < pages.length - 1 ? '#7b5ea7' : '#aaa',
						}}
					>
						Next
					</Button>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						maxWidth: 700,
						marginBottom: '80px', // Ensure content doesn't overlap with the fixed buttons
					}}
				>
					<Outlet />
				</Box>
			</Box>
		</div>
	);
}
