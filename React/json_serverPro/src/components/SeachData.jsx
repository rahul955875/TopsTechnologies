import React, { useEffect, useState } from "react";

const SeachData = ({ setCallback }) => {
  const [desig, setDesig] = useState("");
  const [emname, setEmname] = useState("");
  const [searchDoj, setSearchDoj] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchSalary, setSearchSalary] = useState("");
  useEffect(() => {
    setCallback(() => (person) => {
      if (desig) {
        return person.designation.toLowerCase().includes(desig.toLowerCase());
      }
      if (emname) {
        return person.ename.toLowerCase().includes(emname.toLowerCase());
      }
      if (searchCity) {
        return person.city.toLowerCase().includes(searchCity.toLowerCase());
      }
      if (searchDoj) {
        return person.doj.includes(searchDoj);
      }
      if (searchSalary) {
        return person.salary <= searchSalary;
      }
      return true;
    });
  }, [desig, emname, searchDoj, searchCity, searchSalary]);

  return (
    <div className="container mt-4">
      <h3>Search data in table base on choice</h3>
      <div className="row">
        <div className="col-2">
          <input
            type="text"
            name="searchEmname"
            id=""
            value={emname}
            className="form-control"
            placeholder="Search via employee name"
            onChange={(e) => {
              setEmname(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            name="searchDesig"
            id=""
            value={desig}
            className="form-control"
            placeholder="Search designation"
            onChange={(e) => {
              setDesig(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            name="searchdate"
            id=""
            className="form-control"
            onChange={(e) => {
              setSearchDoj(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            name="searchCity"
            id=""
            value={searchCity}
            className="form-control"
            placeholder="Search by City"
            onChange={(e) => {
              setSearchCity(e.target.value);
            }}
          />
        </div>
        <div className="col-2">
          <input
            type="number"
            name="searchSalary"
            id=""
            value={searchSalary}
            className="form-control"
            placeholder="Salary less than"
            onChange={(e) => {
              if (!(e.target.value < 0)) setSearchSalary(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SeachData;
