import React, { useState } from "react";

const HandlingEvnetsAndConditionals = () => {
  const [text, setText] = useState("Not Clicked");
  return (
    <>
      {/* task 1 : change Text using EvnetHandling (Handling Events in React) */}
      <h2>{text}</h2>
      <button onClick={() => setText("Clicked!")}>Change Text</button>

      <div>
        <FormFeild />
      </div>
      <div>
        <IsUserLoign />
      </div>
      <div>
        <IsEligible />
      </div>
    </>
  );
};

export default HandlingEvnetsAndConditionals;

const FormFeild = () => {
  // task 2 : dynamic form (Handling Event in React)
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    localStorage.setItem("isUserLogin", input.username);
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <br />
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h3>User Name : {input.username}</h3>
      <h3>User Password : {input.password}</h3>
    </>
  );
};

const IsUserLoign = () => {
  // task 1 : conditionally showing login and logout button
  const isUser = localStorage.getItem("isUserLogin");
  const [status, setStatus] = useState(isUser);
  return (
    <>
      <h3>
        User Login :
        {status || (
          <button
            onClick={() => {
              localStorage.setItem("isUserLogin", "rahul");
              setStatus(localStorage.getItem("isUserLogin"));
            }}
          >
            Login
          </button>
        )}
      </h3>
      <h3>
        User Logout:
        {status && (
          <button
            onClick={() => {
              localStorage.removeItem("isUserLogin");
              setStatus(localStorage.getItem("isUserLogin"));
            }}
          >
            Logout
          </button>
        )}
      </h3>
    </>
  );
};

const IsEligible = () => {
  // task 2 : Eligible voter or not (Conditional Rendering)
  const [isEligible, setIsEligible] = useState(null);
  const handleChange = (e) => {
    setIsEligible(Number(e.target.value));
  };
  return (
    <>
      <input type="text" placeholder="Enter your age" value={isEligible} onChange={handleChange} />
      {isEligible !== null &&
        (isEligible >= 18 ? (
          <h2>Your are Eligible to Vote</h2>
        ) : (
          <h2>Your are not Eligible to vote</h2>
        ))}
    </>
  );
};
