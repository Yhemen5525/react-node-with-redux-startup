/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE } from "../redux/cake/cakeType";
import { buyCake } from "../redux/index";

function CakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
