import ProductCard from "./ProductCard";
import { render, screen } from "@testing-library/react";
it("should render a card to the screen", () => {
	render(<ProductCard />);
	const cardElement = screen.getByText(/blue tape/i);
	expect(cardElement).toBeInTheDocument();
});
