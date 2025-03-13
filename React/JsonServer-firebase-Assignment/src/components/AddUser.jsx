const AddUser = ({ updatingUser, setUpdateState, userDetail }) => {
  const [isUpdating, setIsUpdating] = updatingUser;
  const [user, setUser] = userDetail;
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.ok) {
          alert("Updated successfully.");
          setIsUpdating(false);
          setUser({
            id: "",
            name: "",
            role: "",
            city: "",
          });
          setUpdateState((prev) => !prev);
        }
      });
      return;
    }
    console.log("renderd");
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          alert("data added successfully");
          setUser({
            id: "",
            name: "",
            role: "",
            city: "",
          });
          setUpdateState((prev) => !prev);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container mt-4 shadow-sm p-4">
      <h2>{isUpdating ? "Update User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="row row-cols-2 g-4">
        <div className="col">
          <input
            type="number"
            name="id"
            placeholder="Enter Your id"
            value={user.id}
            disabled={isUpdating ? true : false}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <select
            name="role"
            id=""
            value={user.role}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" hidden>
              --select role--
            </option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Full-Stack">Full-stack</option>
          </select>
        </div>
        <div className="col">
          <select
            name="city"
            id=""
            value={user.city}
            onChange={handleChange}
            className="form-control"
          >
            <option value="" hidden>
              --select city--
            </option>
            <option value="Surat">Surat</option>
            <option value="Navsari">Navasari</option>
            <option value="Ahemdabad">Ahemabad</option>
          </select>
        </div>
        <div className="col-2">
          <button className="btn btn-primary px-4" type="submit">
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
