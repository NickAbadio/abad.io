import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
