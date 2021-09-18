import { render, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';

it('should accept input for player 1', () => {
  const { queryByTitle } = render(<App/>);
  const input = queryByTitle("input-field1");
  fireEvent.change(input, {target: { value: "dan"}})
  expect(input).toBeTruthy();
})

it('should accept input for player 2', () => {
  const { queryByTitle } = render(<App/>);
  const input = queryByTitle("input-field2");
  fireEvent.change(input, {target: { value: "lena"}})
  expect(input).toBeTruthy();
})