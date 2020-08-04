import React from 'react'
import { css } from '@emotion/core'

import AddIngredientForm from './addIngredientForm'
import AddInstructionForm from './addInstructionForm'

const recipeAddWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  button {
    margin: 8px 8px 0 8px;
    height: 30px;
  }
`

export default function CreateForm(props) {
  const {
    setRecipeTitle,
    setRecipeCategory,
    setRecipeIngredients,
    setRecipeInstructions,
    recipeIngredients,
    recipeInstructions,
  } = props

  return (
    <div css={recipeAddWrapperCss}>
      <div>
        <div>Recipe Title:</div>
        <div>
          <input type="text" onChange={({ target }) => setRecipeTitle(target.value)} />
        </div>
      </div>
      <div>
        <div>Category:</div>
        <div>
          <select name="recipe-category" onChange={(e) => setRecipeCategory(e.currentTarget.value)}>
            <option value="blank"> </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Appetizer/Snack">Appetizer/Snack</option>
          </select>
        </div>
      </div>
      <div>
        <AddIngredientForm />
        {/* <button type="button">Add an Ingredient</button> */}
        <AddInstructionForm setRecipeInstructions={setRecipeInstructions} instructionsArr={[]} />
        {/* <button type="button">Add an Instruction</button> */}
      </div>
    </div>
  )
}
