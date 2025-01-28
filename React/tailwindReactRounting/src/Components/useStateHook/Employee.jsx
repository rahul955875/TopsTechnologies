import React, { useState } from "react";

function Employee() {
  const empData = [
    { id: 1, name: "Jignesh", salary: 25000 },
    { id: 2, name: "chetan", salary: 55000 },
    { id: 3, name: "bharat", salary: 65000 },
    { id: 4, name: "shivam", salary: 45000 },
    { id: 5, name: "dipak", salary: 15000 },
    { id: 6, name: "virat", salary: 15000 },
    { id: 7, name: "rahul", salary: 200000 },
  ];
  const [storeData, setStoreData] = useState(empData);
  const [search, setSearch] = useState(storeData);
  const handleSearch = (e) => {
    const SearchSalary = e.target.value;
    if (SearchSalary.trim()) {
      setSearch(() =>
        storeData.filter((items) => (items.salary >= SearchSalary) || items.name.includes(SearchSalary))
      )
    }else{
      setSearch(storeData)
    }
  };
  return (
    <div className="flex-col flex items-center mt-10">
      <input
        type="text"
        placeholder="Search based on salary"
        name="search"
        onChange={handleSearch}
        className="border p-3 shadow w-96"
      />
      <table className="border-separate shadow-xl min-w-96 " >
        <thead className="bg-slate-200">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {search.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
