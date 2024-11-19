import {useEffect, useState} from "react";

export const ResponsiveBackground = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [color, setColor] = useState('');

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		setColor(width >= 800 ? '#ADD8E6' : '#FFC0CB')
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize)
		};
	},[width]);


	return<div style={{backgroundColor: color}}>
			<p>Largeur: {width}px</p>
		</div>
}