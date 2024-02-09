import React, { useRef, useState, useEffect } from 'react';
import css from './main.module.css';
import a1 from './img/h1-slider-1a-background-img.jpg';
import a2 from './img/h1-slider-2a-background-img.jpg';
import a3 from './img/h1-slider-3a-background-img.jpg';

export default function Main() {
	const images = [a1, a2, a3];
	const text = ['ONWARDS ON GLOR!', 'YOU SPEAK OF JUSTICE?', 'REPEL THE INVADERS'];
	const [x, setX] = useState(0);
	const forText = useRef(null);
	const chkP = useRef()

	const checkPoint = (index) => {
		setX(index);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setX((prevIndex) => (prevIndex + 1) % images.length);
		}, 3500);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<main style={{ background: `url(${images[x]})` }}>
			<h1 ref={forText} style={{ color: 'white' }}>
				{text[x]}
			</h1>
			<div className={css.checkDiv} ref={chkP}>
				{images.map((_, index) => (
					<div
						key={index}
						className={css.checkPoint}
						onClick={() => {
							checkPoint(index)
							setX(index)
						}}
						style={{ height: x === index ? '27px' : '20px' }}
					></div>
				))}
			</div>
		</main>
	);
}
