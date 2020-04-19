import React from 'react';
import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Mapper from './components/MapComponent';


function App() {
  return (
    <div className="App">
      <Mapper></Mapper>
      <MonthPicker></MonthPicker>
      <ListApi></ListApi>
    </div>
  );
}

export default App;
