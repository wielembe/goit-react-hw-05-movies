import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NLink, NavigationBar } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <NavigationBar>
        <NLink to="/">Home</NLink>
        <NLink to="/movies">Movies</NLink>
      </NavigationBar>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
