import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import AddUser from "./components/AddUser";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    role: "",
    city: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [userData, setUserData] = useState(null);
  const [updateState, setUpdateState] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => setUserData(data));
    };
    fetchData();
  }, [updateState]);

  const handleDelete = (id) => {
    setUserData((prev) => prev.filter((user) => user.id !== id));
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("data deleted succesfully.");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleUpdate = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      role: user.role,
      city: user.city,
    });
    setIsUpdating(true);
  };
  return (
    <main>
      <AddUser
        userDetail={[user, setUser]}
        setUpdateState={setUpdateState}
        updatingUser={[isUpdating, setIsUpdating]}
      />

      {!userData ? (
        <h2 className="p-4 text-center">Loading...</h2>
      ) : (
        <div className="shadow py-3 px-5 container mt-5">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.city}</td>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(user)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default App;
