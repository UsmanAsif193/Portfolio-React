import React, { Suspense } from 'react'
import './App.css';
import AppLoader from './Components/Common/App-Loader';
import { useDarkMode } from './Context/DarkMode';

const Home = React.lazy(() => import('./Components/Home/index'))

function App() {
  const darkMode = useDarkMode()
  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Suspense fallback={<AppLoader />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
