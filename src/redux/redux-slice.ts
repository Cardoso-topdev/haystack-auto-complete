import { createSlice } from "@reduxjs/toolkit";
import { RecipeRawType, RecipeType, StoreType } from "types/recipe";

export interface ReducerLikeActionType {
  payload: RecipeType
}

export interface ReducerSetRecipesActionType {
  payload: Array<RecipeRawType>
}

let initRecipeValueFromLocalStorage: Array<RecipeType> = [];
const localStorageData = window.localStorage.getItem('MY_APP_STATE')
if (localStorageData) {
  initRecipeValueFromLocalStorage = JSON.parse(localStorageData)
}

export const reduxSlice: any = createSlice({
  name: 'reduxSlice',
  initialState: {
    recipes: initRecipeValueFromLocalStorage
  },
  reducers: {
    like: (state: StoreType, action: ReducerLikeActionType) => {
      state.recipes = state.recipes.map(item => {
        if(item.id === action.payload.id) {
          return ({
            ...item,
            favorite: !action.payload.favorite
          })
        } else {
          return item
        }
      })
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(state.recipes));
    },
    setRecipes: (state: StoreType, action: ReducerSetRecipesActionType) => {
      state.recipes = action.payload.map( item => ({
        ...item,
        favorite: false
      }))
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(state.recipes));
    }
  }
})

export const { like, setRecipes } = reduxSlice.actions

export default reduxSlice.reducer