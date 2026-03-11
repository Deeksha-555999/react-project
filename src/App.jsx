import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

function App() {
  const [mode, setMode] = useState("dark");
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    message: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "My App - Dark Mode";
      // setInterval(() => {
      //   document.title = "My App is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install My App Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "My App - Light Mode";
    }
  };

  return (
    <>
    <Router> 
            <Navbar  title="My App"  about="About Us"/>
      <Navbar title="My App" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
         <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm heading="Try MyApp- Word Counter, Character Counter, Convert Uppercase/Lowercase" mode={mode} />} />
        </Routes> 
      {/* <TextForm heading="Enter the text to analyze be  low" mode={mode} showAlert={showAlert} /> */}
      </div>
       </Router> 
    </> 
  );
}

export default App;
