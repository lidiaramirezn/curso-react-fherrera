/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { FirstApp } from './FirstApp';

describe('Pruebas en ', () => {
    
    test('Debe de hacer match con el snapshot ', () => {
      const title = 'Hola, soy Goku';
      
      render( <FirstApp title = { title }/> )
    });

    test('debe de mostrar el título en un h1', () => {
        
      const title = 'Hola, Soy Goku';
      const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
      expect( getByText(title) ).toBeTruthy();

      expect( getByTestId('test-title').innerHTML ).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
      const title = 'Hola, Soy Goku';
      const subTitle = 'Soy un subtitulo';
      const { getAllByText } = render( 
          <FirstApp 
              title={ title }
              subTitle={ subTitle }
          /> 
      );

      expect( getAllByText(subTitle).length ).toBe(2);

    });
});