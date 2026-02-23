import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";


describe("contact us page test case" ,()=>{

    // it and test works the same.

it("contact us page/component should be loaded", () => {
  render(<Contact />);

  // querying
  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

it("button should be loaded on the page", () => {
  render(<Contact />);

  // querying
  const button = screen.getByRole("button");

  //assertion
  expect(button).toBeInTheDocument();
});

test("button should be loaded on the page", () => {
  render(<Contact />);

  // querying
  const button = screen.getByText("submit");

  //assertion
  expect(button).toBeInTheDocument();
});

test("placeholder should be present on the page", () => {
  render(<Contact />);

  // querying
  const inputName = screen.getByPlaceholderText("name");

  //assertion
  expect(inputName).toBeInTheDocument();
});

test("should load 2 input box on the contact component", () => {
  render(<Contact />);
  // querying
  const input = screen.getAllByRole("textbox");

  //   console.log(input);

  //assertion
  expect(input.length).toBe(2);
});

}); 
