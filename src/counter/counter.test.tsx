import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  it("increment button get rendered", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("render count 0 initially", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  //   with fireEvent Method
  it("render user after clicking increment button", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  //   with user-event library and also need to make it asynchronous using async await method
  it("after clicking increment button get 1", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("after double clicking increment button get 2", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

});
