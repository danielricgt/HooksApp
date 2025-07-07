import { renderHook } from "@testing-library/react-hooks";
import { disconnect } from "process";
import { act } from "react";
import { useCounter } from "../../src/hooks/UseCounter";

describe("test on use counter", () => {
  test("test must return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrease, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrease).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("counter value must be 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("MUST INREMENT the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(3);
    });
    expect(result.current.counter).toBe(15);
  });

  test("MUST dicrease the counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrease } = result.current;

    act(() => {
      decrease();
      decrease(2);
    });
    expect(result.current.counter).toBe(7);
  });

  test('should reset the value if reset is call', () => { 

    const { result } = renderHook(() => useCounter());
    const { counter,  increment, decrease,reset } = result.current;


    act(()=>{
        increment();
        decrease();
        reset();
    });

    expect(result.current.counter).toBe(10);

  })
});
