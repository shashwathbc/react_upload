import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import Login from "./Login";
import {auth} from "../firebase";

function Header() {
  

   


















  // getting frm stateprovider
const [ {basket , user}, dispatch] = useStateValue();

const handleAuthenticaton = () => {
  if (user) {
    auth.signOut();
  }
}


  return (
    <div className="header">
      {/* our logo img */}
      {/* Link is used to make sure that when clicked on this img it takes u back to homepage */}
      
       <Link to= "/">
       <img className="header_logo" src={logo} alt="" />  
       </Link>
     
      {/* search  */}
      <div className="header_search">
        {/* search input */}
        <input className="header_searchInput" type="text" />
        {/* SEARCH LOGO */}
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* sign in , orders , cart */}
      <div className="header_nav">
        {/* we r using LIink to link it to the login page  */}
        <Link to= {!user && '/login'}>
        <div onClick={handleAuthenticaton} className="header_option">
          <span className="header_optionLineOne">HELLO  {!user ? 'Guest' : user.email}</span>
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Membership</span>
        </div>
        {/* shpping basket icon */}
        <Link to="/checkout"> 
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
        

        {/* hamburger icon
      <div className="menu-icon" onClick={this.handleClick}>
          <MenuIcon />
      </div> */}
      </div>
    </div>
  );
}

export default Header;
