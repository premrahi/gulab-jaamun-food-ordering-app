import {getByRole, render,screen} from "@testing-library/react" ;
import '@testing-library/jest-dom';
import Contact from "../components/Contact";

test("contact us page/component should be loaded" ,()=>{

    render(<Contact/>) ;

    const heading = screen.getByRole("heading") ;

    expect(heading).toBeInTheDocument();

}) ;

test("button should be loaded on the page" ,()=>{

    render(<Contact/>) ;

    const button = screen.getByRole("button") ;

    expect(button).toBeInTheDocument();

}) ;

test("button should be loaded on the page" ,()=>{

    render(<Contact/>) ;

    const button = screen.getByText("submit") ;

    expect(button).toBeInTheDocument();

}) ;

test("placeholder should be present on the page" ,()=>{

    render(<Contact/>) ;

    const inputName = screen.getByPlaceholderText("name") ;

    expect(inputName).toBeInTheDocument();

}) ;

test("should load 2 input box on the contact component",()=>{
    render(<Contact/>)

    const input = screen.getAllByRole("textbox") ;

    // expect(input).toBeInTheDocument()
})
