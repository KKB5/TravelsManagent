import React, { useState } from "react";
import './Admin_Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {Homepage_Navbar} from '../Homepage/Homepage_Navbar/Homepage_Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export function Admin_Login(){

    const [password,setPassword]=useState(false);
    const show=()=>{setPassword(!password);}

    return(
        <>
        <Homepage_Navbar/>
        <div className="row m-0 p-0">
        <div className="col m-0 p-0">
        <div className="Admin_img image-fluid">
            <div className="Login_card ">
           
            <div className="Input_box">
            <h1><b>Admin Login</b></h1>
            <input type={"text"} placeholder={"Username"} name={"User_name"} className="form-control input_box " size={50}></input>
                <div className="pass_cont">
                <label className="pass_in">
                    <FontAwesomeIcon icon={faEyeSlash} onClick={show}  />
                </label>
                <input type={password ? "text":"password"} placeholder={"Password"} name={"Password"} className="form-control input_box"/>
                </div>
           
            </div>

            <div id="Remember_me_card">
            <input type={"checkbox"} id={"Remember_me"} ></input>
            <label for={"Remember_me"} >Remember_me</label>
            </div>
            <div >
             <Link to='Tour_Detail_Table'> <button className="btn btn-info m-1">Login</button> </Link>
            </div>
            

            <div id="Forgot_password">
            
            <span>Forgot Password</span>
            
            </div>
            
            
            </div>
            
            


        </div>
        </div>
        </div>
        
        
        
        
        
        </>
    );
}