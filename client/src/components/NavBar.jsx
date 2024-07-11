 import React from 'react'
 import { Link } from 'react-router-dom'

 function NavBar(){
    return (
        <nav>
            <Link to="/">title Link</Link>
            {" | "}
            <Link to="/new">New title</Link>
        </nav>
    )
 }

 export default NavBar