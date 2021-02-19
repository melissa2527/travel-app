import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import {Hero} from './components/Hero/Hero';
import {Places} from './components/Places/Places';
import {Countries} from './components/Countries/Countries.js';
import {placesData} from './components/Places/placesData';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Route exact path='/' component={Hero}/>
      <Places heading='Choose your favorite' data={placesData}/>
      {/* <Countries data={placesData}/> */}
          {/* {placesData.map((c, index) => {
            return (
              
                <Countries c={c}><Route key={index} exact path={c.name.toLowerCase()}/></Countries>
            )
          })} */}
 
    </Router>
  );
}

export default App;
