import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Dashboard = () => {
    return (
        <div>
        <Navbar></Navbar>
           <div className='w-[1030px] mx-auto'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;