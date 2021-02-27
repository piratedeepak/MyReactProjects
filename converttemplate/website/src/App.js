import React from "react";
import Appsection from "./Appsection";
import Cardsection from "./Cardsection";
import Footer from "./Footer";
import Herosection from "./Herosection";
import NavBar from "./Navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Cardsection />
      <Appsection />
      <Footer />
    </div>
  );
};

export default App;
