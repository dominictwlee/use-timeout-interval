import { useEffect, useRef, useReducer, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'interval':
      return { ...state, iDelay: action.payload };
    case 'timeout':
      return { ...state, tDelay: action.payload };
    case 'hasTimedOut':
      return { ...state, hasTimedOut: true };
    case 'resetTimeOut':
      return { ...state, hasTimedOut: false };
    case 'clear':
      return {
        ...state,
        iDelay: null,
        tDelay: null,
      };
    default:
      return state;
  }
}

export default function useTimeoutableInterval(intervalCb, iDelay, timeoutCb, tDelay) {
  const savedIntervalCb = useRef(intervalCb);
  const savedTimeoutCb = useRef(timeoutCb);
  const initialState = { iDelay, tDelay, hasTimedOut: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDelay = useCallback((type, delay) => {
    dispatch({ type, payload: delay });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'clear' });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: 'clear' });
    dispatch({ type: 'timeout', tDelay: state.tDelay });
    dispatch({ type: 'interval', iDelay: state.iDelay });
  }, [state.iDelay, state.tDelay]);

  useEffect(() => {
    savedIntervalCb.current = intervalCb;
  }, [intervalCb]);

  useEffect(() => {
    savedTimeoutCb.current = timeoutCb;
  }, [timeoutCb]);

  useEffect(() => {
    dispatch({ type: 'resetTimeOut' });
  }, [state.iDelay, state.tDelay]);

  useEffect(() => {
    let id;
    if (!state.hasTimedOut && state.iDelay) {
      id = setInterval(() => {
        savedIntervalCb.current();
      }, state.iDelay);
    }
    return () => {
      clearInterval(id);
    };
  }, [state.iDelay, state.hasTimedOut]);

  useEffect(() => {
    let id;
    if (state.tDelay != null) {
      id = setTimeout(() => {
        dispatch({ type: 'hasTimedOut' });
        savedTimeoutCb.current && savedTimeoutCb.current();
      }, state.tDelay);
    }
    return () => {
      clearTimeout(id);
    };
  }, [state.tDelay]);

  return {
    setDelay,
    timeoutDelay: state.tDelay,
    intervalDelay: state.iDelay,
    clearAll,
    restart,
  };
}
