import React from 'react';

import './App.css';
import Title from './component/Title'
import './component/style.css'
import Form from './component/Form';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Title/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
