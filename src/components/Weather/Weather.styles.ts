import styled from 'styled-components';

export const WeatherLayout = styled.div<{ $weather: string }>`
  background: ${({ $weather }) =>
    `url(/src/assets/${$weather}.jpeg), no-repeat`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WeatherContainer = styled.div`
  color: black;
  position: absolute;
  background-color: white;
  opacity: 50%;

  border-radius: 25px;
  padding: 1rem;
  top: 1rem;
  right: 1rem;

  &:hover {
    opacity: 100%;
  }
  transition: all 300ms ease-in-out;
`;
