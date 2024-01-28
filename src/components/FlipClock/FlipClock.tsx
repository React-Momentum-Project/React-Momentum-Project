import { useCallback, useEffect, useState } from 'react';

import Digit from './Digit/Digit';
import { Container } from './style';

const FlipClock = () => {
  const [tensHour, setTensHour] = useState('0');
  const [unitsHour, setUnitsHour] = useState('0');
  const [tensMinute, setTensMinute] = useState('0');
  const [unitsMinute, setUnitsMinute] = useState('0');
  const [tensSecond, setTensSecond] = useState('0');
  const [unitsSecond, setUnitsSecond] = useState('0');

  const setTime = useCallback(() => {
    const currentTime = new Date();
    const [curTensHour, curUnitsHour] = currentTime
      .getHours()
      .toString()
      .padStart(2, '0')
      .split('');
    const [curTensMinute, curUnitsMinute] = currentTime
      .getMinutes()
      .toString()
      .padStart(2, '0')
      .split('');
    const [curTensSecond, curUnitsSecond] = currentTime
      .getSeconds()
      .toString()
      .padStart(2, '0')
      .split('');

    setTensHour(curTensHour);
    setUnitsHour(curUnitsHour);
    setTensMinute(curTensMinute);
    setUnitsMinute(curUnitsMinute);
    setTensSecond(curTensSecond);
    setUnitsSecond(curUnitsSecond);
  }, []);

  useEffect(() => {
    setTime();
    const intervalId = setInterval(setTime, 1000);

    return () => clearInterval(intervalId);
  }, [setTime]);

  return (
    <Container>
      <Digit
        key={`tens hour ${tensHour}`}
        binary={2}
        incomingValue={tensHour}
      />
      <Digit
        key={`units hour ${unitsHour}`}
        binary={10}
        incomingValue={unitsHour}
      />
      <Digit
        key={`tens minute ${tensMinute}`}
        binary={6}
        incomingValue={tensMinute}
      />
      <Digit
        key={`units minute ${unitsMinute}`}
        binary={10}
        incomingValue={unitsMinute}
      />
      <Digit
        key={`tens second ${tensSecond}`}
        binary={6}
        incomingValue={tensSecond}
      />
      <Digit
        key={`units second ${unitsSecond}`}
        binary={10}
        incomingValue={unitsSecond}
      />
    </Container>
  );
};

export default FlipClock;
