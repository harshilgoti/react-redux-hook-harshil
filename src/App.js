import "./App.css";
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "./store/action";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user, shallowEqual);

  useEffect(() => {
    dispatch(getUser());
  }, []); // eslint-disable-line

  console.log("user", user);
  return <div className="App">Harshil</div>;
}

export default App;
