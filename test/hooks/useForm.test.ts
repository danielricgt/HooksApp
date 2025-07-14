import { renderHook } from "@testing-library/react-hooks";

import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe("use form test set", () => {
  const initialForm = {
    name: "daniel",
    email: "danielricardogtœgmail.com",
  };

  test("should show default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { FormState, onInputChange, onResetForm } = result.current;

    expect(FormState).toEqual({
      name: "daniel",
      email: "danielricardogtœgmail.com",
    });
    expect(onInputChange).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });

  test("should change the forms name", () => {
    const newValue = "Daniela";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    console.log(result.current.FormState.name);

    expect(result.current.name).toBe("Daniela");
    expect(result.current.FormState.name).toBe(newValue);
  });

  test("should do the form reset", () => {
    const newValue = "Daniela";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    console.log(result.current.FormState.name);

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.FormState.name).toBe(initialForm.name);
  });

});
