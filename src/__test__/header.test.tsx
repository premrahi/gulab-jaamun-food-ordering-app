import Header from "../components/Header";
import "@testing-library/jest-dom";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("header test case", () => {
  it("should render header component with a login button", () => {
    //rendering

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    //querying
    // const LoginBtn = screen.getByRole("button") ;
    // const LoginBtn = screen.getByText('Login')

    // mergin both for precision
    const LoginBtn = screen.getByRole("button", { name: "Login" });

    //assertion
    expect(LoginBtn).toBeInTheDocument();
  });
  it("should render header component with zero cart items", () => {
    //rendering
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItems = screen.getByText("(0)");
    const cart = screen.getByText("Cart");

    //assertion
    expect(cartItems).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });
  it("should check the click functionality of Login btn", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const LoginBtn = screen.getByRole("button" , {name : "Login"}) 

    // fire event is used to do an event 
    fireEvent.click(LoginBtn) ;

    const LogoutBtn = screen.getByRole("button" , {name : "Logout"}) 

    expect(LogoutBtn).toBeInTheDocument() ;


  });
});
