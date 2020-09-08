import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Img1 from '../media/cats.jpg';

import { MdFavorite } from 'react-icons/md';

import { MdFavoriteBorder } from 'react-icons/md';
import '../styling/dog.css';
import { Grid } from '@material-ui/core';
import { favorites } from './reducers/favorites';

import { postFavorites } from './actions/ActionCreators';
import { connect } from 'react-redux';
import { addFavorite } from './actions/ActionCreators';
import { markFavorite } from './dogs';

const useStyles = makeStyles({
	root: {
		direction: 'row',
		justify: 'center',
		maxWidth: 400,
		alignItems: 'center',
		padding: '10px',
		display: 'inline-block',
		margin: '0.2px',
		transform: 'scale(0.9)',
		color: '#0F1928',

		backgroundColor: '#fff4e3',
	},
	media: {
		height: 500,
		width: 400,
	},
});

const Cards = (props) => {
	const { cardId, favorites, addFav, race, age, description, image } = props;
	const classes = useStyles();

	return (
		<Card
			style={{ borderRadius: 65 }}
			className={classes.root}
			color='rgb(238, 191, 121)'
			borderColor='#0F1928'
			borderWidth='1'
		>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} />

				<CardContent className={classes.content}>
					<div>
						<h2>{race}</h2>
						<p>{description}</p>
						<p>{age}</p>
					</div>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button
					onClick={console.log('VREI SA ADOPTI?')}
					size='40px'
					backgroundColor='#fff4e3'
				>
					Adopt
				</Button>
				<Button onClick={addFavorite(cardId)}>
					<MdFavoriteBorder size='2em' />
				</Button>
			</CardActions>
		</Card>
	);
};
const mapStateToProps = (state) => {
	return {
		favorites: state.favorites,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addFavorite: (cardId) => dispatch(addFavorite(cardId)),
	postFavorites: (cardId) => dispatch(postFavorites(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
//export default Cards;
