import React from 'react';
import Cards from './card';
import styles from '../styling/dg.module.scss';
import Img1 from '../media/1cat.jfif';
import Img2 from '../media/2cat.jfif';
import Img3 from '../media/3cat.jfif';
import Img4 from '../media/4cat.jpg';
import Img5 from '../media/5cat.jpg';
import Img6 from '../media/6cat.jpg';
import Img7 from '../media/7cat.jpg';
import Img8 from '../media/8cat.jpg';
import Img9 from '../media/9cat.jpg';
import Img10 from '../media/10cat.jpg';
import Img11 from '../media/11cat.jpg';
import Img12 from '../media/12cat.jpg';
//import Img13 from '../media/13.jfif';
import { borders } from '@material-ui/system';
import Cat_Icon from '../media/cat-silhouette-svg-21.png';

import { Provider } from 'react-redux';
import logo from '../media/logo.png';

class Cats extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			galery: [
				{
					race: 'Domestic Short Hair',
					age: 'Baby',
					description: 'Female',
					image: Img1,
				},
				{
					race: 'Domestic Short Hair',
					age: '5 years old',
					description: 'Female',
					image: Img2,
				},
				{
					race:
						'Domestic Short Hair & Extra-Toes Cat / Hemingway Polydactyl Mix',
					age: 'Young',
					description: 'Female',
					image: Img3,
				},
				{
					race: 'Domestic Short Hair, Tabby ',
					age: '5 years old',
					description: 'Male',
					image: Img4,
				},
				{
					race: 'Domestic Short Hair',
					age: '15 years old',
					description: 'Male',
					image: Img5,
				},
				{
					race: 'Domestic Short Hair',
					age: '3 years old',
					description: 'Male',
					image: Img6,
				},
				{
					race: 'Domestic Short Hair',
					age: '3 years old',
					description: 'Female',
					image: Img7,
				},
				{
					race: 'Domestic Short Hair',
					age: '12 years old',
					description: 'Female',
					image: Img8,
				},
				{
					race: 'Domestic Short Hair',
					age: '6 years old',
					description: 'Female',
					image: Img9,
				},
				{
					race: 'Domestic Short Hair',
					age: '4 years old',
					description: 'Female',
					image: Img10,
				},
				{
					race: 'Domestic Short Hair',
					age: '8 years old',
					description: 'Male',
					image: Img11,
				},
				{
					race: 'Domestic Short Hair',
					age: '2 years old',
					description: 'Male',
					image: Img12,
				},
			],
		};
	}
	render() {
		const { galery } = this.state;
		return (
			<div className={styles.container}>
				<h1>Find your soulmate</h1>
				<img src={Cat_Icon} alt='cat' />
				<div className={styles.galery}>
					{galery.length > 0 &&
						galery.map((card, index) => (
							<Cards
								key={index}
								race={card.race}
								age={card.age}
								description={card.description}
								image={card.image}
							/>
						))}
				</div>
				<img width='400px' src={logo} alt='logo' />
			</div>
		);
	}
}

export default Cats;
