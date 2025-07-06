import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../src/hooks/UseCounter";
import { disconnect } from "process";

describe('test on use counter', () => { 

test('test must return default values', () => {

    const {result} = renderHook(() => useCounter());
    const{counter, decrease, increment, reset} =(result.current);

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrease).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    
});

test('counter value must be 100', () => {
    const {result} = renderHook(() => useCounter(100));
    const{counter} = (result.current)
    
    expect(counter).toBe(100);
});



 })