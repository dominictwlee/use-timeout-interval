import React, { useState } from 'react';
import useTimeoutableInterval from './index';

const TestComponent = () => {
  const [counter, setCounter] = useState(0);
  const [timeoutMsg, setTimeoutMsg] = useState('');

  const { setDelay, clearAll } = useTimeoutableInterval(
    () => {
      setCounter(counter + 1);
    },
    200,
    () => {
      setTimeoutMsg('timed out');
    },
    800
  );

  return (
    <div>
      <h1 data-testid="counterText">{counter}</h1>
      <h1 data-testid="timeoutText">{timeoutMsg}</h1>
      <button onClick={() => setDelay('interval', 100)}>Set Interval</button>
      <button onClick={() => setDelay('timeout', 500)}>Set Timeout</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default TestComponent;
