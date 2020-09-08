import React from 'react';
import Cards from './card';
import styles from '../styling/dg.module.scss';
import Img1 from '../media/1.jpg';
import Img2 from '../media/2.jpg';
import Img3 from '../media/3.jpg';
import Img4 from '../media/4.jpg';
import Img5 from '../media/5.jpg';
import Img6 from '../media/6.jpg';
import Img7 from '../media/7.jfif';
import Img8 from '../media/8.jfif';
import Img9 from '../media/9.jfif';
import Img10 from '../media/10.jfif';
import Img11 from '../media/11.jfif';
import Img12 from '../media/12.jfif';
//import Img13 from '../media/13.jfif';
import Dog_Icon from '../media/dog-silhouette-svg-19.png';
import { borders } from '@material-ui/system';
import { Grid } from '@material-ui/core';

import logo from '../media/logo.png';

import { favorites } from './reducers/favorites';

import { postFavorites } from './actions/ActionCreators';

import { connect } from 'react-redux';
import { addFavorite } from './actions/ActionCreators';

class Dogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			galery: [
				{
					cardId: 1,
					race: 'Miniature Pinscher/Chihuahua Mix',
					age: 'Adult',
					description: 'Female',
					image: Img1,
				},
				{
					cardId: 2,
					race: 'German Shepherd Dog/Australian Cattle Dog Mix',
					age: '3 years old',
					description: 'Female',
					image: Img2,
				},
				{
					cardId: 3,
					race: 'American Bulldog',
					age: 'Young',
					description: 'Female',
					image: Img3,
				},
				{
					cardId: 4,
					race: 'Australian Shepherd/Boxer Mix',
					age: 'Young',
					description: 'Male',
					image: Img4,
				},
				{
					cardId: 5,
					race: 'American Bulldog/Pit Bull Terrier Mix',
					age: 'Young',
					description: 'Female',
					image: Img5,
				},
				{
					cardId: 6,
					race: 'Chihuahua',
					age: '3 years old',
					description: 'Male',
					image: Img6,
				},
				{
					cardId: 7,
					race: 'Shepherd & Beagle Mix',
					age: 'Adult',
					description: 'Male',
					image: Img7,
				},
				{
					cardId: 8,
					race: 'Entlebucher & Mountain Dog Mix',
					age: 'Young',
					description: 'Female',
					image: Img8,
				},
				{
					cardId: 9,
					race: 'Labrador Retriever & American Bulldog Mix',
					age: '3 to 4 month old',
					description: 'Male',
					image: Img9,
				},
				{
					cardId: 10,
					race: 'Pit Bull Terrier',
					age: '1 year',
					description: 'Female',
					image: Img10,
				},
				{
					cardId: 11,
					race: 'Retriever Mix',
					age: '8 years old',
					description: 'Male',
					image: Img11,
				},
				{
					cardId: 12,
					race: 'Yorkshire Terrier',
					age: '6 years old',
					description: 'Male',
					image: Img12,
				},
			],
			favorites: [],
		};
	}
	// markFavorite(cardId) {
	// 	this.setState({ favorites: this.state.favorites.concat(cardId) });
	// }

	render() {
		const { galery } = this.state;
		return (
			<Grid container direction='row' justify='center' alignItems='center'>
				<div className={styles.container}>
					<h1>Find your soulmate</h1>
					<p></p>
					<img
						width='150px'
						marginLeft='auto'
						marginRight='auto'
						display='block'
						align-self='center'
						src={Dog_Icon}
						alt='cat'
					/>

					<div className={styles.galery}>
						{galery.length > 0 &&
							galery.map((card, cardId) => (
								<Cards
									race={card.race}
									age={card.age}
									description={card.description}
									image={card.image}
									//onPress={() => this.markFavorite(cardId)}
								/>
							))}
					</div>
					<img width='400px' src={logo} alt='logo' />
				</div>
			</Grid>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		favorites: state.favorites,
// 	};
// };

// const mapDispatchToProps = (dispatch) => ({
// 	addFavorite: (cardId) => dispatch(addFavorite(cardId)),
// 	postFavorites: (cardId) => dispatch(postFavorites(cardId)),
// });

export default Dogs;
