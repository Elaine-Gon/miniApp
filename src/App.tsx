import React, { Suspense, startTransition } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import Details from './screens/Details/Details';
import { GlobalStyle } from './styles/global';

const host = React.lazy(() => import("host/HomeHost"));
const Button = React.lazy(() => import("host/Button"));

function Home() {
  const navigate = useNavigate()

  function handler() {
    startTransition(() => {
      navigate("/")
    })
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle/>
      <Details/>
        <Button
          onClick={handler}
        >
          <FiChevronLeft  size={50}/>
        </Button>
      </Suspense>
    </div>
  );
}

function App() {
  return(
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' Component={host} />
          <Route path='/test' Component={Home} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
