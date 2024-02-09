import React, { useRef, useState } from 'react';
import tb1 from './img/team1-banner.png';
import tb2 from './img/team2-banner.png';
import tb3 from './img/team3-banner.png';
import tb4 from './img/team4-banner.png';
import tb5 from './img/team5-banner.png';
import tb6 from './img/team6-banner.png';
import css from './teambanners.module.css'
export default function Teambanners() {
	let [tbanners, setTbanners] = useState([tb1, tb2, tb3, tb4, tb5, tb6]);


	// setTimeout(() => {
	// 	let a = tbanners.slice(5)
	// 	let b = tbanners.slice(0)
	// 	let c = tbanners.slice(1)
	// 	let d = tbanners.slice(2)
	// 	let e = tbanners.slice(3)
	// 	let f = tbanners.slice(4)
	// 	tbanners.pop()
	// 	setTbanners([[a],... tbanners,[b]])
	// }, 3000);
	return (
		<div className={css.teamBanners}>
			<div className={css.sliderContainer}>
				<div className={css.Teamitems}>{tbanners.map((item, index) => {
					return (
						<div key={index} className={css.bnners} style={{ background: `url(${item})` }} ></div>
					)
				}
				)}</div>
				<div className={css.Teamitems}>{tbanners.map((item, index) => (
					<div key={index} style={{ background: `url(${item})` }} ></div>
				)
				)}</div>
			</div>
		</div>
	);
}
