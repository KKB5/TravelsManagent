import React from "react";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {Homepage_Navbar} from '../Homepage/Homepage_Navbar/Homepage_Navbar';

export function Login(){
    return(
        <>
        <Homepage_Navbar/>
        <div className="row m-0 p-0">
        <div className="col m-0 p-0">
        <div className="beach_img image-fluid">
            <div className="Login_card ">
           
            <div>
            <h1><b>Login</b></h1>
            <input type={"text"} placeholder={"Username"} name={"User_name"} className="form-control input_box " size={50}></input>
            <input type={"Password"} placeholder={"Password"} name={"Password"} className="form-control input_box"></input>
            </div>

            <div id="Remember_me_card">
            <input type={"checkbox"} id={"Remember_me"} ></input>
            <label for={"Remember_me"} >Remember_me</label>
            </div>
            <div >
                <button className="btn btn-info m-1">Login</button>
            </div>
            <div id="Signup">
            <Link to="./Signup">
            <span>Don't have account?? signup</span>
            </Link>
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