import React from 'react';
import ListApi from './components/ListApi';
import MonthPicker from './components/MonthPicker';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';

function App() {
  return (
    <div className="App">
      <Mapper></Mapper>
      <Form></Form>
      <MonthPicker></MonthPicker>
      <ListApi></ListApi>
    </div>
  );
}

export default App;
