import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeApis } from 'service/api-service';
import { setRecipes } from 'redux/redux-slice';
import { RecipeRawType, StoreValue } from 'types/recipe';
import MainLayout from '../layouts/MainLayout';
import AutoComplete from 'components/AutoComplete';

/**
 * Display cooking recipes data in the materiable table
 * Pulling data from the mock server and dispatch data into the store
 */
const Home: React.FC = () => {

  const recipes = useSelector((state: StoreValue) => state.recipeReducer.recipes)
  const dispatch = useDispatch()

  useEffect(() => {
    const getRecipes = async (): Promise<void> => {
      try {
        const recipesRes: Array<RecipeRawType> = await RecipeApis.getRecipes()
        dispatch(setRecipes(recipesRes))
      } catch (e: any) {
        console.log('Get Recipes Error : ', e.response?.data?.message)
      }
    }
    if (recipes.length === 0) {
      getRecipes()
    }
  }, [])

  return (
    <MainLayout>
      <AutoComplete label='Label' placeHolder='Value' />
    </MainLayout>
  );
};

export default Home;