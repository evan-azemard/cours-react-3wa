import { useEffect,useState } from "react";

export const MagicCounter = () => {

	const isMultiple = (number) => number > 0 && number % 5 === 0;
	const getMagicMessage = (number) => isMultiple(number) ? "✨ Nombre magique atteint ! ✨" : null;

	const [count, setCount] = useState(0)
	const [color, setColor] = useState('#FDEDEC');

	useEffect(() => {
		return () => {
			if (count > 0 && count % 5 === 0) setColor('#D4F1F4');
			else setColor('#FDEDEC');
		}
	},[count]);



	const handleClick = (symbol) => setCount((prevCount) =>  symbol === '+'? prevCount + 1 : prevCount - 1);

	return <>
		<h1 style={{color: color}}>{count}</h1>
		<p>{getMagicMessage(count)}</p>
		<button style={{borderRadius: '10px'}} onClick={() => setCount(count => count +1)}>-</button>
		<button style={{borderRadius: '10px'}} onClick={() => handleClick('+')}>+</button>
		<button style={{borderRadius: '10px'}} onClick={() => setCount(0)}>Reset</button>
	</>
}