import styled, { keyframes } from 'styled-components';

const rotateTop = keyframes`
    0% {
      transform: rotateX(0deg);
    }
    0%,
    99% {
      opacity: 0.99;
    }
    100% {
      transform: rotateX(90deg);
      opacity: 0;
    }
  `;

const rotateBottom = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  0%,
  99% {
    opacity: 0.99;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 0;
  }
`;

export const FoldTop = styled.div<{ $outgoingValue: number }>`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 50%;
  background-color: #5e5e5e;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  opacity: 0;
  transform-origin: bottom;

  animation: ${rotateTop} 0.6s cubic-bezier(0.37, 0.01, 0.94, 0.35);

  &::before {
    content: '${({ $outgoingValue }) => $outgoingValue}';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: -100%;
    color: transparent;
    font-size: 3rem;
    background: linear-gradient(white, gray);
    background-clip: text;
    text-align: center;
  }
`;

export const FoldBottom = styled.div<{ $incomingValue: string }>`
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  background-color: #5e5e5e;
  border-radius: 0 0 4px 4px;
  filter: brightness(130%);
  overflow: hidden;
  opacity: 0;
  transform: translateX(90deg);
  transform-origin: top;

  animation: ${rotateBottom} 0.4s cubic-bezier(0.15, 0.45, 0.28, 1) 0.6s;

  &::before {
    content: '${({ $incomingValue }) => +$incomingValue}';
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    bottom: 0;
    color: transparent;
    font-size: 3rem;
    background: linear-gradient(white, gray);
    background-clip: text;
    text-align: center;
  }
`;

export const CurrentFold = styled.div<{ $incomingValue: string }>`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 50%;
  background-color: #5e5e5e;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  &::before {
    content: '${({ $incomingValue }) => +$incomingValue}';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: -100%;
    color: transparent;
    font-size: 3rem;
    background: linear-gradient(white, gray);
    background-clip: text;
    text-align: center;
  }
`;

export const PrevFold = styled.div<{ $outgoingValue: number }>`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  background-color: #5e5e5e;
  border-radius: 0 0 4px 4px;
  filter: brightness(130%);
  overflow: hidden;

  &::before {
    content: '${({ $outgoingValue }) => $outgoingValue}';
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    bottom: 0;
    color: transparent;
    font-size: 3rem;
    background: linear-gradient(white, gray);
    background-clip: text;
    text-align: center;
  }
`;

export const FoldContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 3.4rem;

  &:nth-child(3n + 2) {
    margin-left: 2px;
  }
`;
