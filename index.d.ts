/**
 *
 * @param intervalCb Callback function to be executed in setInterval
 * @param iDelay Delay duration for interval in ms
 * @param timeoutCb Callback function to be executed in setTimeout
 * @param tDelay Delay duration for timeout in ms
 */
declare function useTimeoutableInterval(
  intervalCb: () => void,
  iDelay: number,
  timeoutCb?: () => void,
  tDelay?: number
): void;

export default useTimeoutableInterval;
