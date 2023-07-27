import React from 'react';
import ReactDOM from 'react-dom';
import Sidenavbar from './Sidenav.jsx';
import Security from './Security.jsx';
import UserProfile from './UserProfile.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sec from './Sec.jsx';
import SearchFinal from './SearchFinal';
import FinalApp from './usercalender';
import Requests from './Requests.jsx';
import UpcomingEvents from './UpcomingEvents';
import FullCalendarApp from './Calender';
import Profile from './Profile';
import Dashboard from './Dashboard';
import RoomBook from './RoomBook'
import FinalLogin from './FinalLogin';
import Signup from './SignUp copy.jsx'
import UserCalender from './usercalender.jsx';
import UserCalender2 from './usercalender2.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <FinalLogin />,
  },
  {
    path: "/login",
    element: <FinalLogin />,
  },
  {
    path: "/dashboard",
    element:<Dashboard />
  },
  {
    path:"/search",
    element: <SearchFinal />
  },
  {
    path:"/requests",
    element:<UserCalender2 />
  },
  {
    path:"/profile",
    element:<UserProfile />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/security',
    element: <Sec/>
  },
  {
    path:'/calendar',
    element: <UserCalender/>
  }

]);

ReactDOM.render(<RouterProvider router={router} />
  ,document.getElementById('root'));




