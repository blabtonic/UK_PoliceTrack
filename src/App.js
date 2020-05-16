import React from 'react';
import Mapper from './components/MapComponent';
import Form from './components/FormSubmit';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <Mapper></Mapper>
      <br/>
      <Form></Form>
    </div>
  );
}

export default App;
