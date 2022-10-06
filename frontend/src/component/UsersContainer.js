/** @format */

import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  fetchUsers,
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
  testFunc,
} from "../redux";

function UsersContainer() {
  const dispatch = useDispatch();

  let { loading, users, error } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("useEffect fired again");
    fetchUsersRequest();

    axios
      .get("/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  }, [dispatch]);

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>{users && users.map((user) => <p>{user.name}</p>)}</div>
    </div>
  );
}

export default UsersContainer;
