import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Base = React.lazy(()=>import('./Base'));

const SplashView = React.lazy(()=>import('./views/SplashView'));

const MainRoutes = () => {
    return (
      <React.Suspense fallback={<p>Loading...</p>}>
        <Base>
          <Routes>
            <Route path="/" element={<SplashView/>} />
            <Route path="about" element={<p>ABOUT</p>} />
          </Routes>
        </Base>
      </React.Suspense>
    );
}


export default MainRoutes; 