import React from 'react'
import { css } from '@emotion/core'

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

export default function CreateForm() {
  return (
    <div css={recipeAddWrapperCss}>
      <div>
        <div>Recipe Title:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <div>Category:</div>
        <div>
          <select name="recipe-category">
            {/* <option value="blank"> </option> */}
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Appetizer/Snack">Appetizer/Snack</option>
          </select>
        </div>
      </div>
      <div>
        <button type="button">Add an Ingredient</button>
        <button type="button">Add an Instruction</button>
      </div>
    </div>
  )
}
