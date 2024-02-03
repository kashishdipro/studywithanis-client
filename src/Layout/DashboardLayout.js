import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet/>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/messages'>Messages</Link></li>
                        <li><Link to='/dashboard/subscribers'>Subscribers</Link></li>
                        <li><Link to='/dashboard/playlist'>Playlist</Link></li>
                        <li><Link to='/dashboard/addplaylist'>Add Playlist</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;