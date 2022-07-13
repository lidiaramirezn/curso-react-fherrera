import { getSaludo } from './02-template-string.js'

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe retornar  "Hola Lid"', () => {
    const name = 'Lid';
    const message = getSaludo( name );

    expect( message ).toBe(`Hola ${name}`)
  });
})