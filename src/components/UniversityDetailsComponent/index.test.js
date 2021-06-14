import { render, screen } from '@testing-library/react';
import { Provider } from  'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UniversityDetails from './index';
import store from '../../store';

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
  });
  global.window.location = "http://localhost:3000/university/Tripura%20University";
});

afterEach(() => {
  jest.restoreAllMocks();
});
test('renders Universities Details page', () => {
  render(<Provider store={store}>
      <BrowserRouter>
      <UniversityDetails />
      </BrowserRouter>
    </Provider>);
  const headingElement = screen.getByText(/Loading...../i);
  expect(headingElement).toBeInTheDocument();
});
test('renders Card Component', () => {
  render(<Provider store={store}>
      <BrowserRouter>
      <UniversityDetails />
      </BrowserRouter>
    </Provider>);
expect(screen.getByRole('heading')).toHaveTextContent('Dr. B. R. Ambedkar National Institute of Technology Jalandhar')
});