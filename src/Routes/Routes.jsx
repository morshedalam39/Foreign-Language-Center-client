import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        },
        {
            path:'/classes',
            element:<Classes></Classes>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard> , 
      children: [
        {
          path: 'manageClasses', 
          element:<ManageClasses></ManageClasses> 
        },
        {
          path: 'manageUsers', 
          element:<ManageUsers></ManageUsers>
        },
        {
          path: 'addClass', 
          element:<AddClass></AddClass>
        },
        {
          path: 'myClass', 
          element:<MyClass></MyClass>
        },
        {
          path: 'selectedClasses', 
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path: 'enrolledClasses', 
          element:<EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'paymentHistory', 
          element:<PaymentHistory></PaymentHistory>
        },
      ]
    }
  ]);

  export default router;