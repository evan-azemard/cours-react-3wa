export const Paragraph = () => {
	const hello = 'Hello';
	const goodBy = 'GoodBye';
	const bool = false;

	return (
		<p>{bool && hello ||goodBy}</p>
	)
}