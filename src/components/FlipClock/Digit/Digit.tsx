import { memo, useEffect, useRef, useState } from 'react';

import * as S from './Digit.styles';

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
    <S.FoldContainer>
      <S.FoldTop $outgoingValue={outgoingValue} />
      <S.FoldBottom $incomingValue={incomingValue} />
      <S.NextFold $incomingValue={incomingValue} />
      <S.PrevFold $outgoingValue={outgoingValue} />
    </S.FoldContainer>
  );
});

export default Digit;
