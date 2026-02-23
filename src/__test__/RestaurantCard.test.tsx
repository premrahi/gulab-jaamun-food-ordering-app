import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResCard from "../components/RestaurantCard";
import mock_data from "../__mocks__/ResCardMockData.json";

describe("checking the Restaurant Card component with Props data", () => {
  // this is how to render component with props. you need to provide with mock data
  it("should load the name of restaurant", () => {
    render(<ResCard resData={mock_data} />);

    const name = screen.getByText("Theobroma");

    expect(name).toBeInTheDocument();
  });
});
