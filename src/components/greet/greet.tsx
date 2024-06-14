import React, { useState } from "react";

type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  const [message, setMessage] = useState(
    `Hello ${props.name || ""} Greetings!`
  );

  const updateMessage = () => {
    setMessage("Hello Updated Greetings!");
  };

  return (
    <>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Greeting</button>
    </>
  );
};

export default Greet;
