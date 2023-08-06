import { act, renderHook } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {
  test("should render false at the beggining", () => {
    const { result } = renderHook(useModal, { initialProps: false });
    expect(result.current.isShowing).toBe(false);
  });

  test("should render isShowing as true after using the function toggle", () => {
    const { result } = renderHook(useModal);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isShowing).toBe(true);
  });
});
