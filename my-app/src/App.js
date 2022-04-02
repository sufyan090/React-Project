import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light') // Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const [text, settext] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      settext("Enable Light Mode")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      settext("Enable Dark Mode")
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
            </Route>
          </Switch>
      </Router> */}
      </div>
      <TextForm showAlert={showAlert} heading="Enter the text to Uppercase the text" mode={mode} />
    </>
  );
}

export default App;
