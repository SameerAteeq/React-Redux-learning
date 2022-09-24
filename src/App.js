import { useSelector, useDispatch } from "react-redux"
function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" })
  }
  const decrement = () => {
    dispatch({ type: "DEC" })
  }
  return (
    <>
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Deccrement</button>
    </>
  );
}

export default App;
