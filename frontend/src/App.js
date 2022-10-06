/** @format */

import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

import CakeContainer from "./component/CakeContainer";
import UsersContainer from "./component/UsersContainer";

function App() {
  axios("/test")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <CakeContainer />
      <UsersContainer />
    </div>
  );
}

export default App;
