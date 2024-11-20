import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Posts = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await axios.get(`https://jsonplaceholder.org/posts`);
				if(response.data) setData(response.data);
				setLoading(false)
			}catch(e){
				console.log(e.message);
				setLoading(false)

			}
		}

		fetchData();
	}, [])

	if(loading) return <p>Chargement en cours...</p>
	return <>
		<h1>Liste des posts:</h1>
		<ul>
			{data.map((datum) => (
				<Link key={datum.id} to={`/post/${datum.id}`} >
					<li>{datum.title}></li>
				</Link>
			))}
		</ul>
	</>
}