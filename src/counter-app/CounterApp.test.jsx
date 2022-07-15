/**
 * @jest-environment jsdom
 */
 import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from './CounterApp';

describe('Pruebas en el <CounterApp />', () => {
  const initialValue = 10;

  test('Dee de hacer match con el snapshot ', () => {
    const { container } = render(<CounterApp value={initialValue} />)
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
    render( <CounterApp value={ 100 } /> );
    expect( screen.getByText(100) ).toBeTruthy();

  });

  test('debe de funcionar el botón de reset', () => {
        
    render( <CounterApp value={ 355 } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect( screen.getByText( 355 ) ).toBeTruthy();

  });
});