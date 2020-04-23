import React from 'react';
import './style.css';
import Sidebar from '../Sidebar/index';

const Layout = (props)  => {
    return (
    <React.Fragment>
        <div className="container">
           {props.children}
           <Sidebar/>  
        </div>
        <div>
            <h1> This is Footer for all pages</h1>
        </div>

    </React.Fragment>
       
    );
}

export default Layout;
