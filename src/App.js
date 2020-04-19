import React from 'react';
//import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker'
import Mapper from './components/MapComponent';


function App() {
  return (
    <div className="App">
      <MonthPicker></MonthPicker>
      <Mapper></Mapper>
    </div>
  );
}

export default App;
