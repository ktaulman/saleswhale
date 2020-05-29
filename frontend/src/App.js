import React from 'react';
//import React-Router Route Component
import {Route} from 'react-router-dom';
//import the NavBar 
import Navbar from './components/Navbar/Navbar'

//import Routes
import HomePage from './routes/HomePage';
// import CompanyPage from './routes/CompanyPage';
// import ProductPage from './routes/ProductPage';

//import CSS 
import './App.css'

//inline style override
const style={
  app:{
    padding:"0px 25px"
  }
}

//Main Screen, <Navbar/> is always rendered
function App() {
  return (
        <div id='App' >
          <Navbar/>
      
          <Route exact path='/'>
            <HomePage/>
          </Route>

          <Route path='/saleswhale'>
            SALESWHALE PAGE 
          </Route>
          
          <Route path='/product'>
            PRODUCT PAGE 
          </Route>

          <Route path='/company'>
            COMPANY PAGE
          </Route>
    </div>
  );
}

export default App;
