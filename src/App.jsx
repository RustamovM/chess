import "./App.css";
import Header from "./components/header/header";
import About from "./components/main/abaut/about";
import Intro from "./components/main/intro/intro";
import Tutor from "./components/main/tutorial/tutorial";
import Contact from "./components/main/contact/contact";

function App() {
  return (
    <>
      <div className="intro_pas">
        <Header />
        <Intro />
      </div>
      <About />
      <Tutor />
      <Contact />
    </>
  );
}

export default App;
