import { getHeroeById, getHeroesByOwner } from './08-imp-exp';
import heroes from '../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;

    const hero = getHeroeById( id );

    const heroData = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    expect( hero ).toEqual(heroData)
  });


  test('getHeroeById debe retornar undefined si no existe ', () => {
    const id = 100;

    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy();
  });


  test('getHeroesByOwner debe retornar heroes de DC', () => {
    const owner = 'DC';
    const getHeroes = getHeroesByOwner( owner );

    expect( getHeroes.length ).toBe( 3);
    expect ( getHeroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
  });
});