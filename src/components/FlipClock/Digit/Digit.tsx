import { memo, useEffect, useRef, useState } from 'react';

import {
  CurrentFold,
  FoldBottom,
  FoldContainer,
  FoldTop,
  PrevFold,
} from './style';

interface DigitProps {
  incomingValue: string;
  binary: number;
}

const Digit = memo(({ incomingValue, binary }: DigitProps) => {
  const willStopSideEffect = useRef(false);
  const [outgoingValue, setOutgoingValue] = useState(
    +incomingValue > 0 ? +incomingValue - 1 : binary - 1,
  );

  useEffect(() => {
    if (willStopSideEffect && willStopSideEffect.current) return;
    willStopSideEffect.current = true;
    setTimeout(() => setOutgoingValue((prev) => (prev + 1) % binary), 900);
  }, []);

  return (
    <FoldContainer>
      <FoldTop $outgoingValue={outgoingValue} />
      <FoldBottom $incomingValue={incomingValue} />
      <CurrentFold $incomingValue={incomingValue} />
      <PrevFold $outgoingValue={outgoingValue} />
    </FoldContainer>
  );
});

export default Digit;
