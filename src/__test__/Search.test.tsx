import "@testing-library/jest-dom";
import Body from "../components/Body";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../__mocks__/MockResListData.json";
import { BrowserRouter } from "react-router-dom";

//simulated fetch function
(global as any).fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

//when ever we work with fetch and useState we need to wrap the render in act() fn
describe("testing the search method in body component", () => {

    beforeAll(()=>{
        console.log("Before All") ;
    })

    beforeEach(()=>{
        console.log("Before Each") ;
    })
    afterAll(()=>{
        console.log("after All") ;
    })

    afterEach(()=>{
        console.log("after Each") ;
    })


  it("should render the body component with filter Button ", async () => {
    //render
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      );
    });

    //querying
    const filterBtn = screen.getByRole("button", {
      name: "Top rated Restaurant",
    });
    // console.log(filterBtn);

    //assertion
    expect(filterBtn).toBeInTheDocument();
  });

  it("should render the body component with restaurant card after search", async () => {
    //render
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      );
    });

    //querying
    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(20);

    const searchBox = screen.getByTestId("searchInput");

    fireEvent.change(searchBox, { target: { value: "pizza" } });

    fireEvent.click(searchBox);

    //added resCard test id to all the restaurantCards
    const cardAfterSearch = screen.getAllByTestId("resCard");

    //assertion
    // it should load 2 cards when searched pizza
    expect(cardAfterSearch.length).toBe(2);
  });

  it("should check the functionality of filter btn ", async() => {
    //render
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      );
    });

    const btn = screen.getByTestId("filterBtn");

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(20);


      fireEvent.click(btn) ;

      const cardAfterClick = screen.getAllByTestId("resCard") ;
      expect(cardAfterClick.length).toBe(14) ;
  });
});
