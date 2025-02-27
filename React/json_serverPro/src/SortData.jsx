import React from "react";

const SortData = ({ setSortTable }) => {
  return (
    <div className="container">
      <h3 className="">Sort Data by choice</h3>
      <div className="search d-flex gap-4">
        <div className="">
          <div>
            <input
              type="radio"
              name="sel"
              className="form-check-input border"
              id="des"
              value="designation"
              onChange={(e) => {
                setSortTable(
                  () => (a, b) => a.designation > b.designation ? 1 : -1
                );
              }}
            />
            <label htmlFor="des">Designation</label>
          </div>
        </div>
        <div className="">
          <div>
            <input
              type="radio"
              name="sel"
              className="form-check-input"
              id="city"
              value="city"
              onChange={(e) =>
                setSortTable(() => (a, b) => a.city > b.city ? -1 : 1)
              }
            />
            <label htmlFor="city">city</label>
          </div>
        </div>
        <div className="">
          <div>
            <input
              type="radio"
              name="sel"
              className="form-check-input"
              id="salary"
              value={"salary"}
              onChange={(e) =>
                setSortTable(() => (a, b) => a.salary - b.salary)
              }
            />
            <label htmlFor="salary">Salary</label>
          </div>
        </div>
        <div className="">
          <div>
            <button
              className="btn btn-outline-primary"
              id="cancel"
              onClick={(e) => setSortTable(() => () => {})}
            >
              Canecl Sort{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortData;
