import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const tileData = {
	img:
		"https://media.cntraveler.com/photos/5d827bb077061d0008731f5f/master/pass/1-Hotel-West-Hollywood_2019_Pool_157.jpg",
	title: "Hotel Rooftop",
	author: "Ryan Seit",
	cols: 12,
};

export const Hero = ({ children, hero }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<img
						src={tileData.img}
						alt={tileData.title}
						width='100%'
						position='absolute'
					/>
					<Paper className={classes.paper} position='relative'>
						xs=12
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
			</Grid>
		</div>
	);
};
