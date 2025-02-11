import React, { useEffect, useRef, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* task 1 : counter with incre. & decrem. (Hooks) */}
      <div className="task1">
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Icrement</button>
        <br />
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>

      <div className="task2">
        <FetchUsersData />
      </div>
      <div className="localStorage"></div>
      <div className="taks4">
        <AvoidRerender />
      </div>
    </>
  );
};

export default Hooks;

const FetchUsersData = () => {
  // task 2 : display data from an API using useEffect() (Hooks)
  //   Assignment localStorage
  const localUserData = JSON.parse(localStorage.getItem("userInfoData"));
  //   console.log(localUserData);
  const [data, setData] = useState(localUserData || []);
  const fetchDataFunc = async () => {
    const fetchData = await fetch("https://dummyjson.com/users");
    const { users } = await fetchData.json();
    console.log("this data get from api");
    setData(users);
    localStorage.setItem("userInfoData", JSON.stringify(users));
  };
  useEffect(() => {
    if (localUserData) {
      console.log("this data get from local");
    } else {
      fetchDataFunc();
    }
  }, []);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const AvoidRerender = () => {
  // task 4 : avoid Rerender using useRef() (Hooks)
  const count = useRef(0);
  const [render, setRender] = useState(0);
  console.log(count.current);
  return (
    <>
      <h2> its show real Value when render : {count.current}</h2>
      <button onClick={() => (count.current += 1)}>
        increment Count without Rerender
      </button>
      <br />
      <button onClick={() => setRender((prev) => prev + 1)}>Rerender</button>
    </>
  );
};
