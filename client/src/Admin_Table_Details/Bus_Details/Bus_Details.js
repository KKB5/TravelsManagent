import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../Table_Custom/Table_Custom.css';
import { Homepage_Navbar } from '../../Homepage/Homepage_Navbar/Homepage_Navbar.js';
import {Table_Change_Button} from '../../Table_Change_Button/Table_Change_Button.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function Bus_Details(){
  return (
<>
    
<Homepage_Navbar/> 

<Table_Change_Button/>

<div className="row update_btn_container">
    
        <div className='mr-3 ml-1 mt-2 '>
        <Link to='/Admin_Login/End_User_Details_Form'>
         <Button variant='info' size="sm">
         Add/Update
        </Button>
        </Link>
        </div>
        <div className='mr-3 ml-1 mt-2 '>
         <Button variant='info' size="sm">
         Remove
        </Button>
        </div>
      </div>

<Table responsive striped="columns">

  <thead>
    <tr>
      <th colspan={7} className='table_heading'>End_User_Details</th>
    </tr>
    <tr>
      <th>S.No</th> 
      <th>Id</th>
      <th>Name</th>
      <th>Email_Id</th>
      <th>Mobile_Number</th>
      <th>Tours allocated</th>
      <th>Tour_State</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
  </tbody>
</Table>

    </> 
  );
}


