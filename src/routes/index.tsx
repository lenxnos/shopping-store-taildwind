import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyOrders from '../pages/MyOrders';
import MyOrder from '../pages/MyOrder';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/my-account',
      element: <MyAccount />, 
    },
    {
      path: 'my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);
  
  return routes;
}