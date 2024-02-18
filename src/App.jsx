import { Heading } from 'components';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/Home/Home'));
const Country = lazy(() => import('./pages/Country/Country'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Routes>
    </>
  );
};
