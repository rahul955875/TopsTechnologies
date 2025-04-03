import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AccodianPlate from "./components/AccodianPlate";

function App() {
  const content = [
    {
      title: "how do i enroll?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure eligendi nihil, cupiditate quod possimus reiciendis placeat consectetur.",
    },
    {
      title: "Title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure eligendi nihil, cupiditate quod possimus reiciendis placeat consectetur.",
    },
    {
      title: "Title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure eligendi nihil, cupiditate quod possimus reiciendis placeat consectetur.",
    },
    {
      title: "Title 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure eligendi nihil, cupiditate quod possimus reiciendis placeat consectetur.",
    },
  ];

  return (
    <>
      <div className="accordian w-50 px-5 mt-5 mx-auto">
        {content.map((item) => (
          <AccodianPlate title={item.title} text={item.text} />
        ))}
      </div>
    </>
  );
}

export default App;
