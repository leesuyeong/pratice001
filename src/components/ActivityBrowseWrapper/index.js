import React from 'react';
import './ActivityBrowseWrapper.css';

const ActivityBrowseWrapper = ({children}) => {
    return(
        <div className='activity-Browser'>
            <div className='activity-Browser-header'>
                <h1 className='activity-Browser-title'>Browser Activities</h1>
                <a className='discover-repositories'>Discover repositories</a>
            </div>
            <hr/>
            {children}
        </div>
    );
}
export default ActivityBrowseWrapper;