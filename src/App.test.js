import { render, screen } from '@testing-library/react';
import { Provider } from  'react-redux';
import App from './App';
import store from '../src/store';

const mockResponse = [{
	"state-province": null,
	"web_pages": ["http://www.nitj.ac.in/"],
	"alpha_two_code": "IN",
	"country": "India",
	"name": "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
	"domains": ["nitj.ac.in"]
}]
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});
test('renders Universities list page', () => {
  render(<Provider store={store}>
      <App />
    </Provider>);
  const headingElement = screen.getByText(/Universities/i);
  expect(headingElement).toBeInTheDocument();
});
test('renders University List Page', () => {
  render(<Provider store={store}>
      <App />
    </Provider>);
  expect(screen.getByRole('table')).toHaveTextContent('Dr. B. R. Ambedkar National Institute of Technology Jalandhar')
});