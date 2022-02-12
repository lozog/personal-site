import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1250px;
  min-width: $home-centerpiece-width;
  margin: 0 auto;
  padding: 0 $app-margin;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: $small-screen-width) {
    width: 100%;
    min-width: auto;
  }
`;