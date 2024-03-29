import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import News from './components/News'
import React, { Component } from 'react'
import {
   BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/general" element={<News key="general" pagesize={9} country="in" category="general"/>}></Route>
           <Route path="/" element={<News key="general" pagesize={9} country="in" category="general"/>}></Route> 
           <Route path="/business" element={<News key="business" pagesize={9} country="in" category="business"/>}></Route> 
           <Route path="/entertainment" element={<News key="entertainment" pagesize={9} country="in" category="entertainment"/>}></Route> 
           <Route path="/health" element={<News key="health" pagesize={9} country="in" category="health"/>}></Route> 
           <Route path="/general" element={<News key="general" pagesize={9} country="in" category="general"/>}></Route> 
           <Route path="/science" element={<News key="science" pagesize={9} country="in" category="science"/>}></Route> 
           <Route path="/sports" element={<News key="sports" pagesize={9} country="in" category="sports"/>}></Route> 
           <Route path="/technology" element={<News key="technology" pagesize={9} country="in" category="technology"/>}></Route>
           </Routes>
           </Router>
           <Footer/>
           </div> 
    )
  }
}
     