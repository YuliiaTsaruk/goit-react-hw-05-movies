import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { GlobalStyle } from 'GlobalStyled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </>
  );
};
