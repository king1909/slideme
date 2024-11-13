// Sidebar.js
import React from 'react';
import './Navbar.css';
import { Link , useLocation } from 'react-router-dom';

function Sidebar({ slide }) {
    const currentTab = useLocation();
    return (
        <div className={slide ? 'sidebar active' : 'sidebar'}>
            <div className="sidebar-logo">
                <h2>SLIDE ME</h2>
            </div>
            <ul className="sidebar-menu">
                <Link to='/dashboard'><button className={`my-1 menu-item ${currentTab.pathname === '/dashboard' && 'active'}`}>Dashboard</button></Link>
                <Link to='/adminmanagement'><button className={`my-1 menu-item ${currentTab.pathname === '/adminmanagement' && 'active'}`}>Admin Management</button></Link>
                <Link to='/permission'><button className={`my-1 menu-item ${currentTab.pathname === '/permission' && 'active'}`}>Permission</button></Link>
                <Link to='/status'><button className={`my-1 menu-item ${currentTab.pathname === '/status' && 'active'}`}>สถานะบัญชี</button></Link>
                <Link to='/adminaccmanagement'><button className={`my-1 menu-item ${currentTab.pathname === '/adminaccmanagement' && 'active'}`}>จัดการบัญชี Admin</button></Link>
                <Link to='/'><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>จัดการประเภทสไลด์</button></Link>
                <Link to=''> <button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>จัดการอัตราค่าบริการ</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>ตรวจสอบ Order</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>ตรวจสอบการสมัคร</button></Link>
                <Link to="/review"><button className={`my-1 menu-item ${currentTab.pathname === '/review' && 'active'}`}>จัดการช้อมูลรีวิว</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>User Management</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>Provider Management</button></Link>
                <Link to='/banner'><button className={`my-1 menu-item ${currentTab.pathname === '/banner' && 'active'}`}>Banner Management</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>การใช้งานเว็บไซต์</button></Link>
                <Link to=''><button className={`my-1 menu-item ${currentTab.pathname === '' && 'active'}`}>เกี่ยวกับเรา</button></Link>
            </ul>
            <div onClick={() => {
               Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
            }} className="sidebar-logout mb-auto mt-20">
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Sidebar;
