import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' }); 
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' }); 
  };
  return (
    <div>
      <h1>Counter App </h1>
      <h2>{counter } </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
