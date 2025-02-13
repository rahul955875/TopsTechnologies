import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((res) => {
      console.log(res.data);
      setUserData(res.data)
    });
  },[]);
  return (
    <>
      <h1>Our Users</h1>
      <h3>current users : {userData.length}</h3>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>id : {user.id}</h3>
          <h3>Name : {user.name}</h3>
          <h4>email : {user.email}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
