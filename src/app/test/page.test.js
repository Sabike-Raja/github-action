import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("renders Next.js logo image", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/next.svg");
  });

  it("renders instructions list", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText(/Save and see your changes instantly/i)).toBeInTheDocument();
    expect(screen.getByText("src/app/page.js")).toBeInTheDocument();
  });

  it("renders Deploy now button with Vercel logo", () => {
    render(<Home />);
    const deployLink = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployLink).toHaveAttribute("href", expect.stringContaining("vercel.com/new"));
    expect(screen.getByAltText("Vercel logomark")).toBeInTheDocument();
  });

  it("renders Read our docs button", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsLink).toHaveAttribute("href", expect.stringContaining("nextjs.org/docs"));
  });

  it("renders footer links", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /Learn/i })).toHaveAttribute("href", expect.stringContaining("nextjs.org/learn"));
    expect(screen.getByRole("link", { name: /Examples/i })).toHaveAttribute("href", expect.stringContaining("vercel.com/templates"));
    expect(screen.getByRole("link", { name: /Go to nextjs.org/i })).toHaveAttribute("href", expect.stringContaining("nextjs.org"));
  });

  it("renders all footer icons", () => {
    render(<Home />);
    expect(screen.getByAltText("File icon")).toBeInTheDocument();
    expect(screen.getByAltText("Window icon")).toBeInTheDocument();
    expect(screen.getByAltText("Globe icon")).toBeInTheDocument();
  });

  it("renders all input fields", () => {
    render(<Home />);
    const inputWWithRole = screen.getByRole("presentation");
    expect(inputWWithRole).toHaveAttribute("type", "password");
    expect(inputWWithRole).toHaveAttribute("role", "presentation");
  });
});