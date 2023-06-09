import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import SetRole from "../hooks/SetRole";
import { FaUtensils } from "react-icons/fa";

const Dashboard = () => {
  const admin =<>
              <li className="mt-10">
              <Link to="/dashboard/manageClasses">Manage Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/manageUsers">Manage Users</Link>
            </li>
  </>
  const instractor =<>
              <li className="mt-10">
              <Link to="/dashboard/addClass"><FaUtensils></FaUtensils> Add Class</Link>
            </li>
            <li>
              <Link to="/dashboard/myClass">My Class</Link>
            </li>
  </>
  const student =<>
              <li className="mt-10">
              <Link to="/dashboard/selectedClasses">My Selected Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledClasses">My Enrolled Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/paymentHistory">My Payment History</Link>
            </li>
  </>
  const {data, refetch, isLoading}=SetRole()

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-auto">
        
          {/* Page content here */}
          <div className="mt-10">
          <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
         
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="flex items-center">
            <img className="w-8" src={logo} alt="" />
            <h1 className="text-xl font-bold">-Language</h1>
          </div>
          
            {/* Sidebar content here */}
            {isLoading? <></>:data?.role ==='student'&& student}
            {isLoading? <></>:data?.role ==='instractor'&& instractor}
            {isLoading? <></>:data?.role ==='admin'&& admin}


            <div className="divider"></div>
            <li>
              <Link to="/"> Home</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;