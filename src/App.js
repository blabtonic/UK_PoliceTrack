import React from 'react';
import ListApi from './components/ListApi';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';

function App() {
  return (
    <div className="App">
      <Mapper></Mapper>
      <Form></Form>
      <ListApi></ListApi>
    </div>
  );
}

export default App;
