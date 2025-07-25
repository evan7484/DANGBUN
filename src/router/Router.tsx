import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import SplashScreen from '../pages/Z/SplashScreen';
import Z_onBoarding from '../pages/Z/Z_onBoarding';
import CalendarPage from '../pages/H/CalendarPage';
import Notification from '../pages/G/Notification';

import SelectableRoleCard from '../components/place/PlaceRollCard';
import PlaceRollCard from '../components/place/PlaceRollCard';
import RequestPopUp from '../components/PopUp/RequestPopUp';
import PlaceMake1 from '../pages/D/PlaceMake1';
import PlaceMake2 from '../pages/D/PlaceMake2';
import PlaceMake3 from '../pages/D/PlaceMake3';
import LogIn from '../pages/A/LogIn';
import Join from '../pages/A/Join';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />,
  },
  {
    path: '/onboarding',
    element: <Z_onBoarding />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
  },
  {
    path: '/alarm',
    element: <Notification />,
  },
  {
    path: 'placemake1',
    element: <PlaceMake1 />, // Ensure PlaceMake1 is imported correctly
  },
  {
    path: 'placemake2',
    element: <PlaceMake2 />,
  },
  {
    path: 'placemake3',
    element: <PlaceMake3 theme='cinema' name='메가박스' />,
  },
  {
    path: 'rollcard',
    element: (
      <div>
        <SelectableRoleCard role='cafe' selected={false} onClick={() => {}} />
        <PlaceRollCard role='cafe' selected={false} onClick={() => {}} />
      </div>
    ),
  },
  {
    path: '/popup',
    element: <RequestPopUp />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
