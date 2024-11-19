export const Title = () => {
	const red = 'red';
	const blue = 'blue';
	const bool = false;

	return (
		<h1 style={{color: bool && red || blue}}>Un titre unique</h1>
	)
}