import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Diego")).toBeInTheDocument();
    expect(getByText("Rodz")).toBeInTheDocument();
    expect(getByText("Mayk")).toBeInTheDocument();
  });

  it("shouldbe able to add new item to the list", () => {
    const { getByText } = render(<App />);

    const addButton = getByText("Adicionar");

    userEvent.click(addButton);

    expect(getByText("Novo")).toBeInTheDocument();
  });
});
