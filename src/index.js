import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './Components/NavBar/NavBar';
import AnimatedCursor from 'react-animated-cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color='89, 66, 80'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
    <NavBar />
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
