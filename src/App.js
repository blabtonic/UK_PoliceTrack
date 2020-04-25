import React from 'react';
import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Mapper from './components/MapComponent';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Mapper></Mapper>
      <MonthPicker></MonthPicker>
      <Form></Form>
      <ListApi></ListApi>
    </div>
  );
}

export default App;
