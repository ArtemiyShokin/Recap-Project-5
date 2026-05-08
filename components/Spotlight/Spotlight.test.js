import Spotlight from "./Index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
jest.mock("../ArtPreview/Index", () => ({
  __esModule: true,
  default: () => <div />,
}));
const mockData = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
};

test("The name of the artist is displayed", () => {
  const onToggleFavorite = jest.fn();
  render(
    <Spotlight
      artpiece={mockData}
      onToggleFavorite={onToggleFavorite}
      artpiecesInfo={[]}
    />
  );
  const artistName = screen.getByText("Steve Johnson");
  expect(artistName).toBeInTheDocument();
});

// test("renders a heading", () => {
// render(<TemperatureUnitConverter />);
// const heading = screen.getByRole("heading", {
// name: /temperature unit converter/i,
// });
// expect(heading).toBeInTheDocument();
// });
