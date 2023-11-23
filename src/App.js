import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { useEffect, useReducer } from "react";
import MyContext from "./components/MyContext";
import { initState, modeReducer } from "./components/MyReducer";
import { Projects } from "./components/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProjects } from "./pages/MyProjects";
import { MyCv } from "./pages/MyCv";
import { Navbar } from "./components/Navbar";
import { ContactMe } from "./pages/ContactMe";

function App() {
  const saveMode = localStorage.getItem("isDarkMode");
  const [state, dispatch] = useReducer(modeReducer, {
    isDarkMode: saveMode || initState.isDarkMode,
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", state.isDarkMode);
  }, [state.isDarkMode]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className={state.isDarkMode === "dark" ? "dark App" : "App"}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/portfolio-"
              element={
                <>
                  <Header />
                  <About />
                  <Projects />
                  <Skills />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/cv" element={<MyCv />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
