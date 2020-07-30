import React from 'react'
import { css } from '@emotion/core'

import RecipePreview from './recipePreview'
import CreateForm from './createForm'

const recipeCreateWrapperCss = css`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: 75%;
  align-items: center;
`
const recipeCreateTitleCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  margin-bottom: 12px;
`
const recipeCreateContentWrapperCss = css`
  display: flex;
  // flex-direction: column;
  border-top: 3px black solid;
  width: 100%;
  justify-content: space-between;
  padding-top: 5px;
`
// const recipeAddWrapperCss = css`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 50%;

//   button {
//     margin: 8px 8px 0 8px;
//     height: 30px;
//   }
// `

export default function RecipeCreate() {
  return (
    <div css={recipeCreateWrapperCss}>
      <div css={recipeCreateTitleCss}>Add Your Own Recipe</div>
      <div css={recipeCreateContentWrapperCss}>
        <CreateForm />
        {/* <div css={recipeAddWrapperCss}>
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
            <button type="button">Add an Ingredient</button>
            <button type="button">Add an Instruction</button>
          </div>
        </div> */}
        <RecipePreview />
      </div>
    </div>
  )
}
