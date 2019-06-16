/**
 *
 * @param intervalCb Callback function to be executed in setInterval
 * @param iDelay Delay duration for interval in ms
 * @param tDelay Delay duration for timeout in ms
 */
declare function useTimeoutInterval(intervalCb: () => void, iDelay: number, tDelay: number): void;

export = useTimeoutInterval;
