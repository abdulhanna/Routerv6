import React from "react";
import "./styles.css";
import { Link,Outlet } from "react-router-dom";

const Navbar = ({isLogged}) => {
  return (
    <>
      <nav>
        <Link to="/" clLinkssName="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          {/* <Link to={'/repos'}>Repos</Link> */}
          {/* <p className="bg-red-400">Test</p> */}
          <Link to="/">Repos</Link>
          <Link to="/users">Users</Link>
          <Link to={"/search"}>Search</Link>
          <Link to={'/authProfile'}>Profile</Link>
        {!isLogged ? <Link to={'/login'}>Login</Link>:""}
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
