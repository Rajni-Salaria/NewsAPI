
import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";




function Nav(props) {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-
                    label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className='navbar-nav'>
          {/* <Nav> */}
          
          <li onClick={() => props.items("sports")}  className="nav-item p-2 fs-4"> <NavLink className="text-decoration-none text-dark" to="./sports"> Sports </NavLink></li>
          <li onClick={() => props.items("business")}  className="nav-item p-2 fs-4 "> <NavLink className="text-decoration-none text-dark" to="./business"> Business </NavLink></li>
          <li onClick={() => props.items("entertainment")}  className="nav-item p-2 fs-4"> <NavLink className="text-decoration-none text-dark" to="./entertainment"> Entertainment</NavLink></li>
          <li onClick={() => props.items("technology")}  className="nav-item p-2 fs-4 "> <NavLink className="text-decoration-none text-dark" to="./technology"> Technology </NavLink></li>
          <li onClick={() => props.items("science")}  className="nav-item p-2 fs-4"> <NavLink className="text-decoration-none text-dark" to="./science"> Science </NavLink></li>
          {/* </Nav> */}
          </ul>
          </div>
        </nav>
   
    
  
    );
  }
  
  export default Nav;