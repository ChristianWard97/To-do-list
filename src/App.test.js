import { render, screen } from '@testing-library/react';
import { RiItalic } from 'react-icons/ri';
import App from './App';


// testing for criteria
describe('Header tests',()=>{

it('should find the header text', ()=> {
  render(<App/>);
  const headerElement = screen.getByText(/To-Do list/i);
  expect(headerElement).toBeInTheDocument();
})
});

