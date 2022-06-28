import React from "react";
import Navbar from "./component/Navbar.js";
import Card from "./component/Card.js";
import Contact from "./component/Contact";
import maki from "./image/maki.jpg"
import keeper from "./image/childerKeeper.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <div className="contact">
        <Contact 
        img={maki}
        name='Mr Maki'
        phone = '000-654-367'
        email='randiluc@gmail.com'
        />
        <Contact 
        img={keeper}
        name='Mr Ankizy'
        phone='237-469-001'
        email='ankizy@gmail.com'
        />
      </div>
    </div>
  );
};

export default App;
