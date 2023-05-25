import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/reducers/userslice";
import Showdata from "./showdata";
const MyComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  const usernameevent = (event) => {
    setUsername(event.target.value);
  };

  const passcodeevent = (event) => {
    setPasscode(event.target.value);
  };

  const emailevent = (event) => {
    setEmail(event.target.value);
  };

  const handleSetUser = (e) => {
    e.preventDefault();
    dispatch(setUser({ username, email, passcode }));
  };

  return (
    <div>
      <form onSubmit={handleSetUser}>
        <input
          type="text"
          value={username}
          onChange={usernameevent}
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={emailevent}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={passcode}
          onChange={passcodeevent}
          placeholder="Passcode"
        />
        <br />
        <button type="submit">Show Data</button>
      </form>
      <Showdata />
    </div>
  );
};

export default MyComponent;
