import React, { useState } from 'react';
import useTimeoutableInterval from './index';

const TestComponent = () => {
  const [counter, setCounter] = useState(0);
  const [iDelay, setIDelay] = useState(200);
  const [tDelay, setTDelay] = useState(800);
  const [timeoutMsg, setTimeoutMsg] = useState('');

  useTimeoutableInterval(
    () => {
      setCounter(counter + 1);
    },
    iDelay,
    () => {
      setTimeoutMsg('timed out');
    },
    tDelay
  );

  return (
    <div>
      <h1 data-testid="counterText">{counter}</h1>
      <h1 data-testid="timeoutText">{timeoutMsg}</h1>
      <button onClick={() => setIDelay(100)}>Set Interval</button>
      <button onClick={() => setTDelay(500)}>Set Timeout</button>
    </div>
  );
};

export default TestComponent;
