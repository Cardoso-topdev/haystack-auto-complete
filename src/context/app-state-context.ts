import { createContext } from "react";
import { RecipeType } from "types/recipe";

export interface AppState {
  recipes: Array<RecipeType>
}

export const initialState: AppState = {
  recipes: []
}

const AppStateContext = createContext<AppState>(initialState)

export default AppStateContext