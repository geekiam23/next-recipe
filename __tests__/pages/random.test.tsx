import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomPage from '@pages/random';
import RecipesLayout from '@components/RecipesLayout';
import { fakeRecipes } from '@lib/utils/testing';

describe('Random Page', () => {
  const handleShowTable = jest.fn();
  const setRandomRecipes = jest.fn();
  it('renders Random page', () => {
    render(<RandomPage />);
    render(
      <RecipesLayout
        recipes={fakeRecipes}
        handleShowTable={handleShowTable}
        header='Random Recipes'
        showTable={false}
        setRandomRecipes={setRandomRecipes}
        showButtonGroup
        showRandomForm
        isRandom
      />
    );
  });

  it('renders RecipesLayout component', async () => {
    console.log(fakeRecipes);
    render(
      <RecipesLayout
        recipes={fakeRecipes}
        handleShowTable={handleShowTable}
        header='Random Recipes'
        showTable={false}
        setRandomRecipes={setRandomRecipes}
        showButtonGroup
        showRandomForm
        isRandom
      />
    );

    const title = await screen.findByText('Jambalaya Stew');
    expect(title).toBeTruthy();
  });
});
