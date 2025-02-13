import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { QUERIES } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  background-color: purple;

  @media ${QUERIES.laptopAndSmaller} {
    background-color: green;
  }

  @media ${QUERIES.tabletAndSmaller} {
    background-color: orange;
  }

  @media ${QUERIES.phoneAndSmaller} {
    background-color: yellow;
  }

`;

export default App;
