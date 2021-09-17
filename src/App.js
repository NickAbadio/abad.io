import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";

function App() {
  const projects = [
    {
      title: "title1",
      image: "images/MEnoBG.png",
      p1: "test yolo swag money",
      tags: [{ title: "REACT" }, { title: "HTML" }, { title: "PYTHON" }],
    },
    {
      title: "title2",
      image: "images/MEnoBG.png",
      p1: "test2 yolo swag money",
      tags: [{ title: "REACT" }, { title: "HTML" }, { title: "PYTHON" }],
    },
    {
      title: "title3",
      image: "images/MEnoBG.png",
      p1: "test3 yolo swag money",
      tags: [{ title: "REACT" }, { title: "HTML" }, { title: "PYTHON" }],
    },
    {
      title: "title4",
      image: "images/MEnoBG.png",
      p1: "test3 yolo swag money",
      tags: [{ title: "HTML" }, { title: "PYTHON" }],
    },
    {
      title: "title5",
      image: "images/MEnoBG.png",
      p1: "test3 yolo swag money",
      tags: [{ title: "HTML" }, { title: "PYTHON" }],
    },
    {
      title: "title6",
      image: "images/MEnoBG.png",
      p1: "test3 yolo swag money",
      tags: [{ title: "HTML" }],
    },
  ];
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Portfolio projects={projects}></Portfolio>
    </div>
  );
}

export default App;
