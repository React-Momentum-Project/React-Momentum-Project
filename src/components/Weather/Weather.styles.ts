import styled from 'styled-components';

export const Div = styled.div<{ $weather: string }>`
  background: ${({ $weather }) =>
    `url(/src/assets/${$weather}.jpeg), no-repeat`};
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
