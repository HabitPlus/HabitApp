/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Landing from "../landing/Landing";
import Home from "../home/Home";

describe("Landing component", () => {
  it("should call handleClick function when button is clicked", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Landing backgroundColor="#FFFCF3" />} />
          <Route path="/home" element={<Home backgroundColor="#FFFCF3" />} />
        </Routes>
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /habit\+/i });
    fireEvent.click(button);
    screen.debug();
    expect(screen.getByText("Nutrición")).toBeInTheDocument();
  });
});
