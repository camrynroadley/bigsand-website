/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Footer from "../../components/Footer/Footer";

describe ('Test Footer', () => {
    it ('checks for proper render', () => {
      const { getByText, getByTestId } = render(<Footer />);
      expect(getByText('© 2024 Big Sand Volleyball Winnipeg')).toBeInTheDocument();
    })
});
