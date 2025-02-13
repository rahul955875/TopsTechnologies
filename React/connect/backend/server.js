import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("my first server is ready 👍");
// });
app.use(express.static('dist'))
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "rahul", email: "rahul@gamil.com" },
    { id: 2, name: "jignesh", email: "jignesh@gamil.com" },
    { id: 3, name: "satyam", email: "satyam@gamil.com" },
    { id: 4, name: "ramesh", email: "ramesh@gamil.com" },
    { id: 5, name: "chetan", email: "chetan@gamil.com" },

  ];
  res.send(users)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  console.log(`server running at : http://localhost:${PORT}`);
});
