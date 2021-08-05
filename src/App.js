import React, { useState } from 'react'
import './App.css';
import AppLoader from './Components/Common/App-Loader';
import Home from './Components/Home/index'

function App() {
  const [isLoader, setIsLoader] = useState(false)

  setTimeout(() => {
    setIsLoader(true)
  }, 2000)

  return (
    <div>
      {isLoader ? (
        <Home />
      ) : (
        <AppLoader />
      )}
    </div>
  );
}

export default App;
