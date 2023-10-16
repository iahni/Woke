import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
 return (
          <nav>
       <ul> 
        <Link to= "/"> Home</Link>
<Link to ="/products"> Products </Link>
<Link to ="/about"> About Us</Link>

</ul>
</nav>
        );

    };
export default NavBar;
