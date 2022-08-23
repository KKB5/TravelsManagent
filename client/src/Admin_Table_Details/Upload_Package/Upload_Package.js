import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../Table_Custom/Table_Custom.css';
import { Homepage_Navbar } from '../../Homepage/Homepage_Navbar/Homepage_Navbar.js';
import {Table_Change_Button} from '../../Table_Change_Button/Table_Change_Button.js';

export function Upload_Package(){
  return (
<>
    
<Homepage_Navbar/> 
<Table_Change_Button/>
<Table responsive striped="columns">

  <thead>
    <tr>
      <th colspan={7} className='table_heading'>Upload_Package</th>
    </tr>
    <tr>
      <th>S.No</th> 
      <th>Place</th>
      <th>Pricing</th>
      <th>Images</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      
      
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
    
      
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>Mark</td>
      <td>Otto</td>
      
      
    </tr>
  </tbody>
</Table>

    </> 
  );
}


