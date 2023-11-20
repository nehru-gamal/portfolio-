import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { useEffect, useReducer, useState } from "react";
import MyContext from "./components/MyContext";
import { initState, modeReducer } from "./components/MyReducer";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

function App() {
  const [state, dispatch] = useReducer(modeReducer, initState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className={state.isDarkMode === "dark" ? "dark App" : "App"}>
        <Header />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
