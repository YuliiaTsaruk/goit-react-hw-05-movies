import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyle } from 'GlobalStyled';
import { LoaderPage } from 'components/Loader/LoaderPage';
import { Header, StyledNavLink, StyledNavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledNavList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledNavList>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<LoaderPage />}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </>
  );
};
