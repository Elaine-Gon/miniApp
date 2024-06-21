import React, { Suspense, startTransition } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

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
      <h1>
        Hello World
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Button
          onClick={handler}
        >
          EITA
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
