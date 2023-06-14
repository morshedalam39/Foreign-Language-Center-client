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
import UpdateMyClass from "../pages/Dashboard/MyClass/UpdateMyClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import Error from "../pages/Error/Error";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateAdmin from "./Privateadmin";
import PrivateInstractor from "./PrivateAdmin copy";
import PrivateStudent from "./PrivateStudent";




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
          element:<PrivateAdmin><ManageClasses></ManageClasses> </PrivateAdmin>
        },
        {
          path: 'manageUsers', 
          element:<PrivateAdmin><ManageUsers></ManageUsers></PrivateAdmin>
        },
        {
          path: 'addClass', 
          element:<PrivateInstractor><AddClass></AddClass></PrivateInstractor>
        },
        {
          path: 'myClass', 
          element:<PrivateInstractor><MyClass></MyClass></PrivateInstractor>
        },
        {
          path: 'updateMyClass/:id', 
          element: <PrivateInstractor><UpdateMyClass></UpdateMyClass></PrivateInstractor>,
          loader :({params})=> fetch(`https://foreign-language-center-client.vercel.app/classSingle/${params.id}`)
        },
        {
          path: 'selectedClasses', 
          element:<PrivateStudent><SelectedClasses></SelectedClasses></PrivateStudent>
        },
        {
          path: 'enrolledClasses', 
          element:<PrivateStudent><EnrolledClasses></EnrolledClasses></PrivateStudent>
        },

        {
          path: 'payment/:id', 
          element:<PrivateStudent><Payment></Payment></PrivateStudent>,
          loader :({params})=> fetch(`https://foreign-language-center-client.vercel.app/singleSelect/${params.id}`)
        },
        {
          path: 'paymentHistory', 
          element:<PrivateStudent><PaymentHistory></PaymentHistory></PrivateStudent>
        },
      ]
    },

{
  path:'*',
  element:<Error></Error>
}
  ]);

  export default router;