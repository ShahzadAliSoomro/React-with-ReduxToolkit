import { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Coin from "./features/counter/coin/Coin";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex justify-center items-center gap-4 text-7xl">
      {/* <button className='' aria-label='Increment value' 
      onClick={() => { setCount(count + 1)}}> + </button>
      <span className='value'>{count}</span>
      <button className='' aria-label='Decrement value' onClick={() => { setCount(count - 1) }}> - </button> */}
      <Counter />
      <Coin />
    </div>
  );
}

export default App;
