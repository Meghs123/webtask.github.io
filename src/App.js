//17th video
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether darkmode is enabled or not
  //by default darkmode is false

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtilssss" aboutText="About us"/> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" exact element={<About />}></Route>

            <Route
              path="/"
              exact
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            ></Route>
          </Routes> */}
           <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
