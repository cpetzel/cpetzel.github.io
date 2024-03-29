import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';
import { logGa } from './utils/log';

function App() {
  useEffect(() => {
    logGa('home_page_visit');
  }, []);

  return (
    <div>
      <HashRouter >
        <BaseLayout />
      </HashRouter>
    </div>
  );
}

export default App;
