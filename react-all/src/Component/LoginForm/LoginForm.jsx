import React, { useState } from "react";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleADD = () => {
    console.log({ userName, password });
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />{" "}
      <br />
      <br />
      <button onClick={() => handleADD()}>Add</button>
    </div>
  );
}
