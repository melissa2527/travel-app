import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import {Hero} from './components/Hero/Hero';
import {Places} from './components/Places/Places';
import {placesData} from './components/Places/placesData';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Places heading='Choose your favorite' data={placesData}/>
    </Router>
  );
}

export default App;
