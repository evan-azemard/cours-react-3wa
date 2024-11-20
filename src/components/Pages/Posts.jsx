import { useEffect,useState } from "react";
import axios from "axios";

export const Posts = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			if(id){
				try{
					const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`)
					setData(response.data);
					console.log(data);
				}catch(e){
					console.log(e.message);
				}
			}
		}

		fetchData();
	}, [id])


	return <>
		<form>
			<input
				onChange={(e) => setId(e.target.value)}
				type='number'
				placeholder='Seléctionne une id'
				value={id}
			/>
		</form>
		{data &&
			<div>
				<h1>{data.title}</h1>
				<p>{data.content}</p>
			</div>
		}
	</>
}