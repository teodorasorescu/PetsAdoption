import React from 'react';
import styles from '../styling/about.module.scss';
import dogs from '../media/aboutdogs.jpg';
import cats from '../media/aboutcats.jpg';
import logo from '../media/logo.png';
import shelter from '../media/shelter.jpg';
import clinic from '../media/clinic.jpg';
import care from '../media/care.jpg';
import ace from '../media/academy.jpg';

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.donateContainer}>
				<div className={styles.text}>
					<h1>
						“Shall we all open our heart to be a forever home for lost pets.” -
						Martha Steward
					</h1>
					<img src={shelter} alt='shelter' />

					<p>
						{/* //<li>They Support Your Mental Health</li> */}A pair of mournful
						eyes peeks out fro­m between metal bars. Whiskers twitch in
						anticipation, ears cock, and a little head tilts as a child and his
						parents walk by. Will this family be the one? This scenario is
						replayed millions of times each year aroun­d the country. Animals
						that are either lost or no longer wanted by their owners are dropped
						off at animal shelters, where they are housed and cared for— but
						often only temporarily. Sadly, shelters are the last stop for more
						than half of the animals that end up there. Only about half of the
						animals that enter a shelter will ever return to their original
						owner or find a new home. The rest will have to be euthanized.
					</p>
					<img src={dogs} alt='dogs' />
					<p>
						The term “animal shelter” typically brings to mind long rows of
						metal-barred cages, the pungent smell of urine, and cacophonous
						barking. But for pets lucky enough to get lost in the San Francisco
						area, accommodations are available at an animal shelter so luxurious
						that it would make most humans jealous. In fact, Embrace Adoption
						Center looks more like a five-star hotel than an animal shelter. At
						the $7 million facility (funded by donations), cats have their own
						private condos, where they can lounge on cushy sofas, scratch at
						plush posts, and watch DVDs of frolicking birds and squirrels. In
						the dog wing, pooches share elegant, furnished Victorian or
						Spanish-style apartments complete with skylights, human-like beds,
						and as many toys as they can chew. All of the animals get out of
						their apartments for regular “play dates,” and none of the residents
						are ever euthanized.
					</p>
					<img src={cats} alt='cats' />
					<p>
						<li>1,517 Cats and Dogs Adopted</li>
						52 animal shelters and rescue groups participated in Nevada’s large
						free pet adoption event, Maddie’s® Pet Adoption Days. It was
						organized by Maddie's® Pet Project in Nevada, a three-year campaign
						aimed at helping more homeless cats and dogs find good homes and
						creating a safety net for pets by improving access to veterinary
						care in the Silver State. A total of 751 cats and 766 dogs are now
						in loving homes thanks to the event held September 27 and 28. More
						than 28 other animals were adopted, too, including rabbits, hamsters
						and guinea pigs. Shelters and rescue groups participated in 19
						communities: Las Vegas, North Las Vegas, Reno, Sparks, Washoe
						Valley, Incline Village, Carson City, Gardnerville, Silver Springs,
						Ely, Elko, Fallon, Fernley, Yerington, Winnemucca, Mesquite, Boulder
						City, Henderson and Pahrump. In order to enable shelters to waive
						adoption fees, Maddie’s® Pet Project in Nevada is awarding
						participating organizations $200 for each cat and dog adopted out
						during the event to cover sheltering expenses.
					</p>
					<img src={clinic} alt='clinic' />
					<p>
						<li>Our clinic is about more than affordable care.</li>
						The Animal Foundation’s Low-Cost Vet Clinic prides itself in
						offering low-cost spay and neuter, cat and dog vaccines, and
						microchipping for dogs and cats in Las Vegas and the surrounding
						community. Our team of highly-skilled, compassionate, medical
						professionals provides unparalleled experience and expertise. As the
						highest volume single-site animal shelter in the nation, our
						Low-Cost Vet Clinic performed 17,845 spay and neuter surgeries,
						16,679 microchipping implants, and 15,100 vaccinations last year
						alone. Rest assured, our caring staff of medical professionals
						provides the best care (at the best value).
					</p>
					<img src={care} alt='dog care' />

					<p>
						<li>ACE Program (Academy for Canine Etiquette)</li>
						Our enrichment experts have implemented a number of programs that
						keep pets stimulated and happy during their stay, while facilitating
						the chances for harder-to-adopt dogs to find a happy home. Dogs
						Playing for Life provides dogs with outdoor exercise and the
						opportunity to socialize with other canines and humans. The ACE
						program trains larger dogs for certification in the American Kennel
						Club’s Canine Good Citizenship program.
					</p>
					<img src={ace} alt='ace (academy)' />
					<p>
						<li>Foster Care</li>
						Our foster volunteer program continues to grow and expand. Our
						Foster Field Trip program is designed to get adoptable animals out
						of the shelter for as little as an afternoon, a weekend, or a few
						weeks. Getting out of the shelter allows the animals to relax,
						de-stress, and “be themselves” while foster caregivers provide
						additional information that can help the pets get adopted. Our
						Foster-to-Forever Homes program allows foster caregivers to become
						more actively involved in getter their pet(s) adopted and the
						adoption process itself. Learn more about fostering a pet.
					</p>
					<img width='400px' src={logo} alt='logo' />
				</div>
			</div>
		</div>
	);
};
export default AboutUs;
