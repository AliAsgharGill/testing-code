import { screen, render } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skillsList = ["HTML", "CSS", "JavaScript"];
  it("renders without crashing", () => {
    render(<Skills skills={skillsList} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("all item of list get rendered", () => {
    render(<Skills skills={skillsList} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skillsList.length);
  });
});
