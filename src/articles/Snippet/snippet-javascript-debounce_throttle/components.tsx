import { useCallback, useState, useMemo } from "react";

const gap = {
  margin: "0 20px",
};

const button = {
  padding: "0 20px",
};

type DebounceFunction<T extends (...args: any[]) => any> = (
  fn: T,
  delay: number
) => (...args: Parameters<T>) => void;
type ThrottleFunction<T extends (...args: any[]) => any> = (
  fn: T,
  interval: number
) => (...args: Parameters<T>) => void;

const _debounce: DebounceFunction<(...args: any[]) => any> = (fn, delay) => {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const _throttle: ThrottleFunction<(...args: any[]) => any> = (fn, interval) => {
  let timer: NodeJS.Timeout | null = null;
  let shouldExecute = true;

  return (...args) => {
    if (!timer) {
      fn(...args);
      shouldExecute = false;
      timer = setTimeout(() => {
        timer = null;
        shouldExecute = true;
      }, interval);
    } else if (shouldExecute) {
      fn(...args);
      shouldExecute = false;
    }
  };
};

export function Debounce() {
  const [count, setCount] = useState(0);
  const [clickcount, setClickcount] = useState(0);

  const debounce = useMemo(
    () => _debounce(() => setCount((v) => v + 1), 500),
    []
  );

  return (
    <>
      <button
        className={`btn btn-primary`}
        style={{ ...gap, ...button }}
        onClick={() => {
          setClickcount((v) => v + 1);
          debounce();
        }}
      >
        Click
      </button>
      <span style={{ ...gap }}>count: {count}</span>
      <span style={{ ...gap }}>clickcount: {clickcount}</span>
    </>
  );
}

export function Throttle() {
  const [count, setCount] = useState(0);
  const [clickcount, setClickcount] = useState(0);

  const throttle = useMemo(
    () => _throttle(() => setCount((v) => v + 1), 500),
    []
  );

  return (
    <>
      <button
        className={`btn btn-primary`}
        style={{ ...gap, ...button }}
        onClick={() => {
          setClickcount((v) => v + 1);
          throttle();
        }}
      >
        Click
      </button>
      <span style={{ ...gap }}>count: {count}</span>
      <span style={{ ...gap }}>clickcount: {clickcount}</span>
    </>
  );
}

