import { ReactNode } from 'react';

import * as S from './Draggable.styles';
import { useDraggable } from './hook/useDraggable';

interface DraggableProps {
  children: ReactNode;
  initPos: { x: number; y: number };
}

const Draggable = ({ children, initPos }: DraggableProps) => {
  const { pos, handleMouseDown } = useDraggable(initPos);

  return (
    <S.DraggableDiv
      x={pos.x}
      y={pos.y}
      onMouseDown={handleMouseDown}
    >
      {children}
    </S.DraggableDiv>
  );
};

export default Draggable;
