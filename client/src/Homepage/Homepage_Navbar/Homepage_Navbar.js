    import React from "react";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './Homepage_Navbar.css';
    import { Link } from "react-router-dom";


    export function Homepage_Navbar(){
        return(

            <nav id='menu'>
            <input type='checkbox' id='responsive-menu'></input><label></label>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Trip_Card_Carousel'>View Packages</Link></li> 
              <li><Link to='#'>About us</Link></li>
              <li><Link to='#'>Contact</Link></li>
              <li><Link to='/Login'>Login</Link></li>
              <li><Link to='/Signup'>Signup</Link></li>
              <li><Link to='/Admin_Login'>Admin_Login</Link></li>
            </ul>
            <ul >
              
            </ul>
          </nav>

        );
    }




