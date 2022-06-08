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
  const add_ten = () => {
    dispatch({ type: 'ADD_TEN', payload: 10 });
  };
  const min_ten = () => {
    dispatch({ type: 'MIN_TEN', payload: 10 });
  };
  return (
    <div>
      <h1>Counter App </h1>
      <h2>{counter } </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add_ten}>Add 10</button>
      <button onClick={min_ten}>Minus 10</button>
    </div>
  );
}

export default App;
