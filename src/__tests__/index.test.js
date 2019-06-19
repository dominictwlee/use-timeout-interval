import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';

import TestComponent from '../TestComponent';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

function repeat(num, cb) {
  for (let i = 0; i < num; i++) {
    cb();
  }
}

test('Interval does not start without delay parameter', () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId('counterText')).toHaveTextContent('0');
});

test('timeout function executed', () => {
  const { getByTestId } = render(<TestComponent />);
  act(() => jest.advanceTimersByTime(1000));
  expect(getByTestId('timeoutText')).toHaveTextContent('timed out');
});

test('interval function executes until time out', () => {
  const { getByTestId } = render(<TestComponent />);
  repeat(5, () => {
    act(() => jest.advanceTimersByTime(200));
  });
  expect(getByTestId('counterText')).toHaveTextContent('4');
});

test('Clear all stops all timed function executions', () => {
  const { getByText, getByTestId } = render(<TestComponent />);
  const clearAllButton = getByText(/clear/i);
  const counterText = getByTestId('counterText');

  repeat(2, () => {
    act(() => jest.advanceTimersByTime(200));
  });

  expect(counterText).toHaveTextContent('2');

  fireEvent.click(clearAllButton);

  repeat(2, () => {
    act(() => jest.advanceTimersByTime(200));
  });

  expect(counterText).toHaveTextContent('2');
});

test('Changing delay values restarts interval and timeout', () => {
  const { getByTestId, getByText } = render(<TestComponent />);
  const intervalButton = getByText(/interval/i);
  const timeoutButton = getByText(/timeout/i);

  repeat(6, () => {
    act(() => jest.advanceTimersByTime(200));
  });

  expect(getByTestId('counterText')).toHaveTextContent('4');

  fireEvent.click(intervalButton);
  fireEvent.click(timeoutButton);

  repeat(6, () => {
    act(() => jest.advanceTimersByTime(100));
  });

  expect(getByTestId('counterText')).toHaveTextContent('9');
});
