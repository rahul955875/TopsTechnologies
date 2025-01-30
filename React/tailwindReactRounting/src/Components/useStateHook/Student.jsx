import React, { useState } from "react";

function Student() {
  const studentData = [
    { id: 1, name: "Jignesh", grade: "A" },
    { id: 2, name: "chetan",  grade: "B" },
    { id: 3, name: "bharat",  grade: "C" },
    { id: 4, name: "shivam",  grade: "D" },
    { id: 5, name: "dipak",  grade: "F" },
    { id: 6, name: "virat",  grade: "A" },
    { id: 7, name: "rahul",  grade: "B" },
    { id: 8, name: "bharat",  grade: "C" },
    { id: 9, name: "Avadh",  grade: "F" },
    { id: 10, name: "raj",  grade: "A" },
  ];
  const [storeData, setStoreData] = useState(studentData);
  const [search, setSearch] = useState(storeData);
  const handleSearch = (e) => {
    const SearchGrade = e.target.value;
    if (SearchGrade.trim()) {
      setSearch(() =>
        storeData.filter((items) => items.grade.toLowerCase().includes(SearchGrade.toLowerCase()))
      )
    }else{
      setSearch(storeData)
    }
  };
  return (
    <div className="flex-col flex items-center mt-10">
      <input
        type="text"
        placeholder="Search based on Grade"
        name="search"
        onChange={handleSearch}
        className="border p-3 shadow w-96"
      />
      <table className="border-separate shadow-xl min-w-96 " >
        <thead className="bg-slate-200">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {search.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
