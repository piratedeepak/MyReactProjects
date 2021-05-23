import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//router
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Not_found from "./Pages/Not_found";

// context
import { UserContext } from "./context/Usercontext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

//firebase
import firebaseConfig from "./Config/firebaseconfig";
import firebase from "firebase/app";
import "firebase/auth";

//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={Not_found} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
