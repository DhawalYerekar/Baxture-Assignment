import React, { useEffect, useState } from "react";
import UserCard from "../Components/UserCard";
import "../Styles/Pages/UsersList.css";
import axios from "axios";
import '../Styles/Pages/UsersList.css'

const UsersList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUsersData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const usersData = response.data; 

        if (usersData) {
          setUserData(usersData);
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    }
    fetchUsersData();
  }, []);

  console.log(userData);

  return (
    <div className="userslist-container">
      {userData.map((user) => {
        return <UserCard key={user.id} userData={user} />;
      })}
    </div>
  );
};
export default UsersList;
