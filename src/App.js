import "./App.css";
import React, { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "./store/action";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user.user, shallowEqual);

  useEffect(() => {
    dispatch(getUser());
  }, []); // eslint-disable-line

  console.log("user", user);
  return (
    <div className="App">
      <h2>Basic example of react redux</h2>
      <h4>Author : - {user && user.name}</h4>
      <h5>Note:- Open console and see response</h5>
    </div>
  );
}

export default App;
