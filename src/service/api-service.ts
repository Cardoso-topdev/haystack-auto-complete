import { BASE_URL, httpClient } from "./http-client"

export const RecipeApis = {
  getRecipes: async () => {
    return await httpClient.get(`${BASE_URL}recipes`)
  }
}