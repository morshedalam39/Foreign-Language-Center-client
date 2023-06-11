import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            
           <div className='pt-[64px]'>
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
            
            
        </div>
    );
};

export default Main;