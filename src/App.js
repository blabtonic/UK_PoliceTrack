import React from 'react';
//import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker'
//import Overlay from 'pigeon-maps';


function App() {
  return (
    <div className="App">
      <MonthPicker></MonthPicker>
      <Map center={[51.507, -0.0612]} zoom={11} width={900} height={900} zoomOnMouseWheel={true}>
        <Marker anchor={[51.507, -0.0612]} payload={1} onClick={({ event, anchor, payload }) => {}}></Marker>
      </Map>
    </div>
  );
}

export default App;
