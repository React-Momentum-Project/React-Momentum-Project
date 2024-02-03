import styled from 'styled-components';

export const StWeatherLayout = styled.div<{ $weather: string }>`
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

export const StWeatherContainer = styled.div`
  color: white;
`;
