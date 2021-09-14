import React, { useState } from "react";

import Login from './Login';
import SignUp from "./Signup";
import Home from './Home';
function App() {

  const [isloggedin, setIsLoggedIn] = useState(false);
  const [isregistered, setIsRegistered] = useState(false);
  function setlogin() {
    setIsLoggedIn(true);

  }
  function setregister() {

    setIsRegistered(true);
  }

  return (
    <div>

      {isloggedin ? <Home /> : isregistered ? <Login method={setlogin} /> : <SignUp method={setregister} />
      }



    </div>

  );
}

export default App;
