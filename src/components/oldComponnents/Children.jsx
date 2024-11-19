export const Children = ({color, children}) => {

	return <>
		<p style={{color: color}}>Ma supper props</p>
		<div>{children}</div>
	</>
}