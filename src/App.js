import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Baitap1 from './Bai-tap1/index';
// import Baitap2 from './Bai-tap2/index';
import RenderingElement from "./Rendering-component/index";
import HandlingEvent from "./HandlingEvent/index";
import ExampleHandingEvent from './HandlingEvent/example';
import State from './State/index';
import ListKeys from './List-keys/index';
import Car from './Baitap-car/index';
import BaitapList from './Baitap-list/index';

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElement />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandingEvent />
      <hr />
      <State />
      <hr />
      <ListKeys />

      <hr />
      <Car />

      <hr/>
      <BaitapList/>
    </div>

  );
}

export default App;
