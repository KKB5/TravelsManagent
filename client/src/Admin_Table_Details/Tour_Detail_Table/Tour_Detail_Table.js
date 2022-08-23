import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../Table_Custom/Table_Custom.css';
import { Homepage_Navbar } from '../../Homepage/Homepage_Navbar/Homepage_Navbar.js';
import {Table_Change_Button} from '../../Table_Change_Button/Table_Change_Button.js';
export function Tour_Detail_Table(){
  return (

    <>
    
    <Homepage_Navbar/> 
    <Table_Change_Button/>
    <Table responsive striped="columns">
      <thead>
      <tr>
      <th colspan={7} className='table_heading'>Tour_Details</th>
    </tr>
      
        <tr>
        <th>Name</th>
          <th>Email_Id</th>
          <th>Mobile_Number</th>
          <th>Place of Vist</th>
          <th>No of persons</th>
          <th>Start date</th>
          <th>End date</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    
    
    </>  
  );
}


