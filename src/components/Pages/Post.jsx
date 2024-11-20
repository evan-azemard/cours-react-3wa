import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Post = () => {
	const {id} = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() =>
	{
		const fetchPost = async () => {
			try{
				const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`)
				setPost(response.data);
				setLoading(false)
			}catch(e){
				console.log(e.message);
				setLoading(false)
			}
		}
		fetchPost();
	},[id]);

	if(loading) return <p>Chargement en cours...</p>

	return <>
		{post &&
			<div>
				<h1>{post.title}</h1>
				<p>{post.content}</p>
			</div>
		}
	</>
}