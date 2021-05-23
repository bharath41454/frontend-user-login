import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className='navbar'>
        <Link to='/signup'>Sign up</Link>
        <Link to='/signIn'>Sign In</Link>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
