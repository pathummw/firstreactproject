import React from 'react';
import Tweet from './Tweet';
let num = 0;

function App(){
  return(
    <div className="app">
      <Tweet name="Pathum" num="4"/>
      <Tweet name="Senuli" num="40"/>
      <Tweet name="Himansa" num="7"/>
      <Tweet name="Senuli" num="72"/>
      <Tweet name="Pathum" num="34"/>
    </div>
  );
}

export default App;