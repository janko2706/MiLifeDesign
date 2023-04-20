import React from 'react';
import { Link, createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/Home';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: (
      <>
        <div>this is a test</div>
        <Link to={'/'} style={{ cursor: 'none' }}>
          Hello
        </Link>
      </>
    ),
  },
]);

export default Routes;
