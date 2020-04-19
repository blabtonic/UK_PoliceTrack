import React from 'react';
//import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Map from 'pigeon-maps';
//import Marker from 'pigeon-maps';
//import Overlay from 'pigeon-maps';


function App() {
  return (
    <div className="App">
      <MonthPicker></MonthPicker>
      <Map center={[51.879, -0.23147]} zoom={12} width={600} height={400}>
      </Map>
    </div>
  );
}

export default App;
