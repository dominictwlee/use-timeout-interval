export type TimerStatesAndDispatchers = {
  setDelay: (type: string, delay: number | null) => void;
  intervalDelay: number | null;
  timeoutDelay: number | null;
  clearAll: () => void;
};

/**
 *
 * @param intervalCb Callback function to be executed in setInterval
 * @param iDelay Initial delay duration for interval in ms
 * @param tDelay Initial delay duration for timeout in ms
 * @param timeoutCb Callback function to be executed in setTimeout
 * @returns Time delay states and functions to update them
 */
declare function useTimeoutableInterval(
  intervalCb: () => void,
  iDelay: number | null,
  timeoutCb?: () => void,
  tDelay?: number | null
): TimerStatesAndDispatchers;

export default useTimeoutableInterval;
