import { Link } from "react-router-dom";

export const Navbar = () => {
	return <>
		<Link to='/'>Accueil</Link> |
		<Link to='/users'>Utilisateur</Link> |
		<Link to='/posts/'>Posts</Link> |
		<Link to='/count'>Count</Link> |
		<Link to='/counter'>Counter</Link>
	</>
}