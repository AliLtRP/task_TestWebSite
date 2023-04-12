import logo from "./logo.svg";
import "./App.css";
import Form from "./components/FormComp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Users' element={<About />}/>
      </Routes>
    </div>
  )
};

export default App;
