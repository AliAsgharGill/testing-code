import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <div>
        <p>{amount}</p>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button onClick={() => setAmount(amount)}>Set Value</button>
      </div>
    </>
  );
};

export default Counter;
