import React, { useState } from 'react';
import imag from './img/blog-2-img-1.jpg';
import imag1 from './img/blog-2-img-2.jpg';
import imag2 from './img/blog-2-img-3.jpg';
import css from './third.module.css'

export default function Third() {
	const [, setIsHovered] = useState(false);
	const images = [imag, imag1, imag2]
	const text = ['WHITE KEEP ASSAULT', 'DOTA 2 TOURNAMENT', 'WINNERS ON ESLPRO']


	return (
		<div className={css.third}>
			<div className={css.thirdHead}> <h2>AN <span style={{ color: 'red' }}>OP</span> THEME JUST FOR GAMERS</h2> <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio sed non. </p> </div>
			<div className={css.thirdContainer}>
				{images.map((img, index) => (
					<div
						key={index}
						className={css.thirdContainerItems}
						style={{ background: `url(${img})`, backgroundSize: 'cover', }}
						onMouseOver={(e) => {
							if (setIsHovered) {
								e.currentTarget.style.transform = 'scale(1.1)'
								e.currentTarget.parentElement.childNodes[index].childNodes[0].style.bottom = '0%'
								e.currentTarget.parentElement.childNodes[index].childNodes[0].childNodes[1].style.left = '10%'
								setIsHovered(true)
							}
						}}
						onMouseOut={(e) => {
							if (setIsHovered) {
								e.currentTarget.style.transform = 'scale(1)'
								e.currentTarget.parentElement.childNodes[index].childNodes[0].style.bottom = '-15%'
								e.currentTarget.parentElement.childNodes[index].childNodes[0].childNodes[1].style.left = '0%'
								setIsHovered(true)
							}
						}}>
						<div className={css.itemsInfo} >
							<button>esports</button>
							<h2>{text[index]}
							<div className={css.line}></div>
							</h2>
							<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam </p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

