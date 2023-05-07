

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import Registration from "./registration/Registration";
import Navbar from "./Navbar";
import Main from "../pages/Main";
import Dashboard from "../pages/dashboard/Dashboard";
import Test from "./Test";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><section className="vh-100"><div className="h-100"><Navbar/><SignIn/></div></section></>,
  },
  {
    path : "/register",
    element : <><section className="vh-100"><Navbar/><Registration/></section></>
  },
  {
    path: "/main",
    element: <Main/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/test",
    element: <Test/>
  },
  

  
]);

export default router ;