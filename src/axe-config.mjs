import React from 'react';

if (import.meta.env.MODE === 'axe' && import.meta.env.DEV) {
  import('@axe-core/react').then(({ default: axe }) => {
    import('react-dom').then(({ default: ReactDOM }) => {
      const invokeAxe = () => axe(React, ReactDOM, 1000);
      document.addEventListener('click', () => invokeAxe())
    });
  });
}





