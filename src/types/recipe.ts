export interface RecipeRawType {
  id: Number,
  name: String,
  createdAt: Date,
  creatorName: String,
  cookingTime: Number,
  ingredients: Array<String>,
  instructions: Array<String>
}

export interface RecipeType extends RecipeRawType {
  favorite: Boolean
}

export interface StoreType {
  recipes: Array<RecipeType>
}
export interface StoreValue {
  recipeReducer: StoreType
}