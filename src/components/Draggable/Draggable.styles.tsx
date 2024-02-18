import styled from 'styled-components';

export const DraggableDiv = styled.div.attrs<{ x: number; y: number }>(
  ({ x, y }) => ({
    style: { left: `${x}px`, top: `${y}px` },
  }),
)`
  position: absolute;
  display: inline-block;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
