import React from 'react';
import { render, act } from '@testing-library/react';

import TestComponent from '../TestComponent';

beforeEach(() => {
  jest.clearAllTimers();
});

test('Interval does not start without delay parameter', () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId('counterText')).toHaveTextContent('0');
});

test('timeout function executed', () => {
  jest.useFakeTimers();
  const { getByTestId } = render(<TestComponent intervalDelay={200} timeoutDelay={900} />);
  act(() => jest.advanceTimersByTime(1000));
  expect(getByTestId('timeoutText')).toHaveTextContent('timed out');
});

test('interval function executed x times', () => {
  jest.useFakeTimers();
  const { getByTestId } = render(<TestComponent intervalDelay={200} timeoutDelay={900} />);
  act(() => jest.advanceTimersByTime(200));
  act(() => jest.advanceTimersByTime(200));
  act(() => jest.advanceTimersByTime(200));
  act(() => jest.advanceTimersByTime(200));
  expect(getByTestId('counterText')).toHaveTextContent('4');
});
