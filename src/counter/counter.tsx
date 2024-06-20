import axios from "axios";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  const [users, setUsers] = useState([]);
  // getting users from api
  const dataFromAPI = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data.map((user: { name: string }) => user.name));
      });
  };

  useEffect(() => {
    dataFromAPI();
  }, []);

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

      <div>
        <ul>{users && users.map((user) => <li key={user}>{user}</li>)}</ul>
      </div>
    </>
  );
};

export default Counter;
