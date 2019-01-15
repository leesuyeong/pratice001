import React from 'react';
import './Header.css';
import NotificationButton from '../NotificationButton';

const Header = () => {
    return(
        <header>
          <div className="header-left">
          <img className="header-logo" 
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"></img>
          <input className="header-searchInfo" type="text" placeholder="Search or jump to..."></input>
          <ul className="header-nav">
            <li className="header-nav-list">Pull requests</li>
            <li className="header-nav-list">Issues</li>
            <li className="header-nav-list">Marketplace</li>    
            <li className="header-nav-list">Explore</li> 
        `</ul> 
          </div>
          <div className="header-right">
            <NotificationButton notification={true}/>
          </div>
        </header>
    );
}
export default Header;