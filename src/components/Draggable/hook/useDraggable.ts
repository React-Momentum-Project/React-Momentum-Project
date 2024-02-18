import {
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useState,
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
    setGrabCursorPos({ x: clientX - rect.x, y: clientY - rect.y });
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      requestAnimationFrame(() => {
        setPos({
          x: e.clientX - grabCursorPos.x,
          y: e.clientY - grabCursorPos.y,
        });
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
