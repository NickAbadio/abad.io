import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Portfolio from "./Components/Portfolio";

function App() {
    return (
        <div className="App">
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <ContactMe></ContactMe>
        </div>
    );
}

export default App;
