export const Paragraph = () => {
	const hello = 'Hello';
	const goodBy = 'GoodBye';
	const bool = false;

	return (
		<h1>{bool && hello ||goodBy}</h1>
	)
}