import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Table_Change_Button.css";

export function Table_Change_Button() {
  return (
    <>
      <div className="row">
      <div className='mr-1 ml-1 mt-2 '>
         <Link to='/Admin_Login/Tour_Detail_Table'><Button variant='secondary' size="sm">
         Tour_Details
        </Button></Link>
        </div>
        <div className='mr-1 ml-1 mt-2 '>
         <Link to='/Admin_Login/End_User_Details'><Button variant='secondary' size="sm">
         End_User_Details
        </Button></Link> 
        </div> 
        <div className='mr-1 ml-1 mt-2 '>
         <Link to='/Upload_Package/Upload_Package'><Button variant='secondary' size="sm">
         Upload_Package
        </Button></Link> 
        </div> 

        <div className='mr-1 ml-1 mt-2 '>
         <Link to='/Admin_Table_Details/Bus_Details/Bus_Details'><Button variant='secondary' size="sm">
         Bus_Details
        </Button></Link> 
        </div>

        <div className='mr-1 ml-1 mt-2 '>
         <Link to='/Admin_Login/End_User_Details'><Button variant='secondary' size="sm">
        Accommodation_details
        </Button></Link> 
        </div>
               
      </div>
    </>
  );
}