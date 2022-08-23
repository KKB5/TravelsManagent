import React from "react";
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {Homepage_Navbar} from '../Homepage/Homepage_Navbar/Homepage_Navbar';
export function Signup(){
    return(
        <>
        <Homepage_Navbar/>
        <div className="row m-0 p-0">
        <div className="col m-0 p-0">
        <div className="vaca_img image-fluid">
            <div className="Signup_card ">
           
            <div>
            <h1><b>Signup</b></h1>
            <input type={"text"} placeholder={"User_Name"} name={"User_Name"} className="form-control input_box " size={50}></input>
            <input type={"email"} placeholder={"Email_Id"} name={"Email_Id"} className="form-control input_box" size={50}></input>
            <input type={"text"} placeholder={"Mobile_Number"} name={"Mobile_Number"} className="form-control input_box" size={50}></input>
            <input type={"Password"} placeholder={"Password"} name={"Password"} className="form-control input_box"></input>
            <input type={"Password"} placeholder={"Confirm_Password"} name={"Confirm_Password"} className="form-control input_box"></input>
            </div>

            <div id="Remember_me_card">
            <input type={"checkbox"} id={"Remember_me"} ></input>
            <label for={"Remember_me"} >Remember_me</label>
            </div>
            <div >
                <button className="btn btn-info m-1">Signup</button>
            </div>
            <div id="Login_already">
            <Link to="/"><span>Already have account ? Login</span></Link>
            </div>

            
            
            
            </div>
            
            


        </div>
        </div>
        </div>
        
        
        
        
        
        </>
    );
}