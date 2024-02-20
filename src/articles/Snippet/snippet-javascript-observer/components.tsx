"use client";
import React, { useEffect } from "react";

type StateObserverType<T> = {
  state: T;
  on<K extends string & keyof T>(
    event: `${K}Update`,
    handler: (oldval: T[K], newval: T[K]) => void
  ): void;
};
type Cb = (oldval: any, newval: any) => void;
type CbArray = Array<Cb>;

function stateObserver<T>(obj: T): StateObserverType<T> {
  const state = {} as T;
  const handlers: Record<string, CbArray> = {};

  for (let key in obj) {
    Object.defineProperty(state, key, {
      get() {
        return obj[key];
      },
      set(newVal) {
        handlers[key].forEach((cb) => {
          cb(obj[key], newVal);
        });
        obj[key] = newVal;
      },
    });
  }

  function on(event: string, cb: any) {
    const key = event.replace("Update", "");

    if (!handlers[key]) {
      handlers[key] = [];
    }

    handlers[key].push(cb);
  }

  return {
    state,
    on,
  };
}

const o = {
  name: "test-name",
  age: 16,
  address: "London",
};

const oObserver = stateObserver(o);

oObserver.on("nameUpdate", (o, n) => {
  console.log(`${o}-1`, `${n}-1`);
});

oObserver.on("nameUpdate", (o, n) => {
  console.log(`${o}-2`, `${n}-2`);
});

oObserver.on("ageUpdate", (o, n) => {
  console.log(`${o}-1`, `${n}-1`);
});

export default function Observer() {
  useEffect(() => {
    oObserver.state.name = "test-name-updated";
    oObserver.state.age = 17;
  }, []);

  return <></>;
}

