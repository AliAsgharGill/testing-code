import { render, screen, fireEvent } from "@testing-library/react";
import Greet from "./greet";
import { act } from "react";

describe("Greet", () => {
  it("Greeting Function", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello Greetings!/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Greeting Function with Prop name", () => {
    render(<Greet name="Ali" />);
    const textElement = screen.getByText("Hello Ali Greetings!");
    expect(textElement).toBeInTheDocument();
  });

  it("Greeting Function updates on button click", () => {
    render(<Greet />);

    const buttonElement = screen.getByText("Update Greeting");
    fireEvent.click(buttonElement);

    const updatedTextElement = screen.getByText("Hello Updated Greetings!");
    expect(updatedTextElement).toBeInTheDocument();
  });
});
