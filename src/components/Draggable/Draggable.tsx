import { ReactNode } from 'react';
import styled from 'styled-components';

import { useDraggable } from './hook/useDraggable';

const DraggableDiv = styled.div.attrs<{ x: number; y: number }>(({ x, y }) => ({
  style: { left: `${x}px`, top: `${y}px` },
}))`
  position: absolute;
  display: inline-block;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

interface DraggableProps {
  children: ReactNode;
  initPos: { x: number; y: number };
}

const Draggable = ({ children, initPos }: DraggableProps) => {
  const { pos, handleMouseDown } = useDraggable(initPos);

  return (
    <DraggableDiv
      x={pos.x}
      y={pos.y}
      onMouseDown={handleMouseDown}
    >
      {children}
    </DraggableDiv>
  );
};

export default Draggable;
