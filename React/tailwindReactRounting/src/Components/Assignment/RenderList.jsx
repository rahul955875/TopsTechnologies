import React from "react";

const RenderList = () => {
  const fruits = ["Apples", "bananas", "Mangoes", "berries", "strawberries"];
  return (
    // task 1 : rendering list using map (Lists & keys)
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <UserListWithUniqueKey/>
    </>
  );
};

export default RenderList;

const UserListWithUniqueKey = ()=>{

    // task 2 : user with unique key (Lists & keys)
    const users = ['Jignesh','Vignesh','vinayak','sanket','satyam','shivam','sundar']
    return (
        users.map(user => <li key={crypto.randomUUID()} className={crypto.randomUUID()}>{user}</li>)
    )
}
