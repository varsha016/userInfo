import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import getUser from "../redux/userAction";
import { UserData } from "./user";
import "./userData.css";

const Userdata = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(users);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: UserData) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userdata;
