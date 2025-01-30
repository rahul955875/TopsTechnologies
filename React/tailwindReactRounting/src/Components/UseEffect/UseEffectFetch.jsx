import React, { useEffect, useState } from "react";
import SearchName from "./SearchName";

function UseEffectFetch() {
  const [user, setUser] = useState([]);
  const [search,setSearch] = useState('')
  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    //   console.log(data)
    };
    handleFetch();
  },[]);
  return (
    <div className="flex-col flex mt-10 px-20">
      <SearchName setSearch={setSearch} />
      <table className="border-separate shadow-xl min-w-96 ">
        <thead className="bg-slate-200">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
            {/* {console.log(user)} */}
          {user.filter(filterd => filterd.name.toLowerCase().includes(search.toLowerCase())).map(person => 
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.address.city}</td>
            </tr>

          )}
        </tbody>
      </table>
    </div>
  );
}

export default UseEffectFetch;
