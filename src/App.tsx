import { Reset } from 'styled-reset';

import Draggable from './components/Draggable/Draggable';
import FlipClock from './components/FlipClock/FlipClock';

function App() {
  return (
    <>
      <Reset />
      {/* 컴포넌트 자리 */}
      <Draggable initPos={{ x: 300, y: 300 }}>
        <FlipClock />
      </Draggable>
    </>
  );
}

export default App;
