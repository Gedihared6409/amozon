import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from "./StateProvider";
import {auth} from './firebase';
export default function Header() {
  
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
      
    return (
     
        <div className="Header">
        {/* Logo */}
       
            <Link to='/'> <div className="Header-logo">
                <img src={"https://bit.ly/31Ow57z"} />
            </div></Link>
     
        {/* Address */}
        <div className="Header-optionAddress">
            {/* icon */}
            <div className="Header-option">
                <h5 className="Header-optionLineOne">Hello,</h5>
                <h5 className="Header-optionLineTwo">Select your address</h5>
            </div>

        </div>
        {/* Search */}
        <div className="Header-search">
            <input className="Header-searchInput" type="text" />
            <div className="Header-searchIconContainer">
                <SearchIcon />
            </div>  
        </div>
        <div className="Header-navItems">
        <div className="Header-navItem">
                {/* Login name */}
                <h5 className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</h5>
                
                <Link to={!user && '/login'}>
                
          <div onClick={handleAuthenticaton} className="header__option">
            
            <h6 className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</h6>
          </div>
          
        </Link>
        </div>
                {/* Orders */}
            <div className="Header-option">
                <span className="Header-optionLineOne">Returns</span>
                <span className="Header-optionLineTwo">& Orders</span>
            </div>  
                {/* Cart */}
            
           
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
            
        </div>

        
    </div>
    
    )
    
}
