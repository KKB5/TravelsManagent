import './App.css';
import {Login} from './Login/Login';
import {Signup} from './Signup/Signup.js';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Homepage} from './Homepage/Homepage.js';
import {Trip_Card_Carousel} from './Trip_Card_Carousel/Trip_Card_Carousel.js';
import {Admin_Login} from './Admin_Login/Admin_Login.js';
import {Tour_Detail_Table} from './Admin_Table_Details/Tour_Detail_Table/Tour_Detail_Table.js';
import {End_User_Details} from './Admin_Table_Details/End_User_Details/End_User_Details.js';
import { End_User_Details_Form } from './Admin_Table_Details/End_User_Details/End_User_Details_Form.js';
import { Bus_Details } from './Admin_Table_Details/Bus_Details/Bus_Details';
import {Upload_Package} from './Admin_Table_Details/Upload_Package/Upload_Package.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Trip_Card_Carousel' element={<Trip_Card_Carousel/>} ></Route>
        <Route path='/Admin_Login' element={<Admin_Login/>}></Route>
        <Route path='/Admin_Login/Tour_Detail_Table' element={<Tour_Detail_Table/>}></Route>
        <Route path='/Admin_Login/End_User_Details' element={<End_User_Details/>}></Route>
        <Route path='/Upload_Package/Upload_Package' element={<Upload_Package/>}></Route>
        <Route path='/Admin_Login/End_User_Details_Form' element={<End_User_Details_Form/>}></Route>
        <Route path='/Admin_Table_Details/Bus_Details/Bus_Details' element={<Bus_Details/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
