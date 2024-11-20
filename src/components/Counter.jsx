
import { useDispatch,useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice.js";

export const Counter = () => {

	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch();

	return <>
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>+</button>
		</div>
	</>
}