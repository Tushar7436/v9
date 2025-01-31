import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './pages/Signup.jsx'
import { Team } from './pages/Team.jsx';
import LoginPage  from './pages/Login.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { Community } from './pages/Community.jsx';
import { Events } from './pages/Events.jsx';
import { checkOverflow } from "./debugSize";
import NotFound from "./pages/PageNotFound.jsx"
import { Toaster } from 'sonner';
import AdminDashboard from "./pages/Dashboard/Admin/AdminDashboard.jsx"
import PartnerDashboard from "./pages/Dashboard/Partner/PartnerDashboard.jsx"
import UserDashboard from "./pages/Dashboard/User/UserDashboard.jsx"

checkOverflow();

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <App/>
    </div>,
  },
  {
    path: "/Home",
    element: 
    <div>
      <App />
    </div>,
  },
  {
    path: "/About",
    element: 
    <div>
      <AboutPage/>
    </div>,
  },
  {
    path: "/Team",
    element: 
    <div>
      <Team/>
    </div>,
  },   
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: 
    <div>
      <LoginPage/>
    </div>,
  },
  {
    path: "/Community",
    element: 
    <div>
      <Community/>
    </div>,
  },
  {
    path: "/Events",
    element: 
    <div>
      <Events/>
    </div>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "UserDashboard",
    element: <UserDashboard />,
  },
  {
    path: "PartnerDashboard",
    element: <PartnerDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
