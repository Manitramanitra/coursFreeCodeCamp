import React from 'react';
import Header from './component/Header';
import Meme from './component/Meme';
import State from './component/State';
import GetTime from './component/GetTime';
const App = () => {
 console.log("app")
  return (
    <div>
      <Header/>
      <Meme/>
      {/* <State/> */}
      {/* <GetTime/> */}
    </div>
  );
};

export default App;