export type TimerStatesAndDispatchers = {
  setDelay: (type: string, delay: number) => void;
  intervalDelay: number;
  timeoutDelay: number;
  clearAll: () => void;
};

/**
 *
 * @param intervalCb Callback function to be executed in setInterval
 * @param iDelay Delay duration for interval in ms
 * @param tDelay Delay duration for timeout in ms
 * @param timeoutCb Callback function to be executed in setTimeout
 * @returns Time delay states and functions to update them
 */
declare function useTimeoutableInterval(
  intervalCb: () => void,
  iDelay: number,
  timeoutCb?: () => void,
  tDelay?: number
): TimerStatesAndDispatchers;

export default useTimeoutableInterval;
