import  {useState, useEffect} from 'react';

export const Interval = () => {
const [width, setWidth] = useState(0);

useEffect(() =>
{
	const handleResize = () => setWidth(window.innerWidth)
	window.addEventListener("resize", handleResize)

	return () => {
		window.removeEventListener("resize", handleResize)
	}
},[width]);

	return <>
			Temps depuis le montage du state {width}
			<button>Click</button>
		</>
}

