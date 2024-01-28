import {
  useCallback,
  useEffect,
  useState,
  MouseEvent as ReactMouseEvent,
} from 'react';

interface Position {
  x: number;
  y: number;
}

export const useDraggable = (initPos: Position) => {
  const [pos, setPos] = useState(initPos);
  const [grabCursorPos, setGrabCursorPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e: ReactMouseEvent) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const [clientX, clientY] = [e.clientX, e.clientY];
    setGrabCursorPos({ x: rect.width - clientX, y: rect.height - clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - grabCursorPos.x,
        y: e.clientY - grabCursorPos.y,
      });
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return { pos, handleMouseDown };
};
