import React from "react";
import Navbar from "./component/Navbar.js";
import Card from "./component/Card.js";
import Affiche from "./component/Affiche"
// import maki from "/public/image/maki.jpg"
// import keeper from "/public/image/childerKeeper.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <div className="contact">
        <Affiche/>
      </div>
    </div>
  );
};

export default App;
