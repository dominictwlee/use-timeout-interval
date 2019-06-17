import React, { useState } from 'react';
import useTimeoutInterval from './index';

const TestComponent = ({ intervalDelay, timeoutDelay }) => {
  const [counter, setCounter] = useState(0);
  const [timeoutMsg, setTimeoutMsg] = useState('');

  useTimeoutInterval(
    () => {
      setCounter(counter + 1);
    },
    intervalDelay,
    () => {
      setTimeoutMsg('timed out');
    },
    timeoutDelay
  );

  return (
    <div>
      <h1 data-testid="counterText">{counter}</h1>
      <h1 data-testid="timeoutText">{timeoutMsg}</h1>
    </div>
  );
};

export default TestComponent;
