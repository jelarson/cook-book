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
    instructionsArr,
    // updateIngredients,
    // updateInstructions,
    actions,
  } = props

  return (
    <div css={recipeAddWrapperCss}>
      <div>
        <div>Recipe Title:</div>
        <div>
          <input type="text" onChange={({ target }) => actions.updateTitle(target.value)} />
        </div>
      </div>
      <div>
        <div>Category:</div>
        <div>
          <select name="recipe-category" onChange={(e) => actions.updateCategory(e.currentTarget.value)}>
            <option value=""> </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Appetizer/Snack">Appetizer/Snack</option>
          </select>
        </div>
      </div>
      <div>
        <AddIngredientForm actions={actions} />
        {/* <button type="button">Add an Ingredient</button> */}
        <AddInstructionForm
          setRecipeInstructions={setRecipeInstructions}
          instructionsArr={instructionsArr}
          recipeInstructions={recipeInstructions}
          // updateInstructions={updateInstructions}
          actions={actions}
        />
        {/* <button type="button">Add an Instruction</button> */}
      </div>
    </div>
  )
}
