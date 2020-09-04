import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HotelIcon from "@material-ui/icons/Hotel";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	button: {
		margin: theme.spacing(1),
	},
}));

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const classes = useStyles();

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						Siesta Key Resort
					</Typography>
					<Link to='/'>
						<Button
							variant='contained'
							color='default'
							className={classes.button}
							startIcon={<HomeIcon />}
							onClick={handleToggle}
						>
							Home
						</Button>
					</Link>
					<Link to='/rooms'>
						<Button
							variant='contained'
							color='default'
							className={classes.button}
							startIcon={<HotelIcon />}
							onClick={handleToggle}
						>
							Rooms
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};
