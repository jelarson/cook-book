import React from 'react'
import { css } from '@emotion/core'

import AddIngredientForm from './addIngredientForm'
import AddInstructionForm from './addInstructionForm'

const recipeAddWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // justify-content: space-between;
  width: 50%;

  button {
    margin: 8px 8px 0 8px;
    height: 30px;
  }
`

const titleAndCategoryWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  // align-items: center;
`

const recipeInputWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
`

const inputContentWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const inputContentCss = css`
  border: 2px solid black;
  border-radius: 7px;
  // width: 225px;
  width: 80%;
`

export default function CreateForm(props) {
  const { actions } = props

  return (
    <div css={recipeAddWrapperCss}>
      <div css={titleAndCategoryWrapperCss}>
        <div css={recipeInputWrapperCss}>
          <div>Recipe Title:</div>
          <div css={inputContentWrapperCss}>
            <input css={inputContentCss} type="text" onChange={({ target }) => actions.updateTitle(target.value)} />
          </div>
        </div>
        <div css={recipeInputWrapperCss}>
          <div>Category:</div>
          <div css={inputContentWrapperCss}>
            <select
              css={inputContentCss}
              name="recipe-category"
              onChange={(e) => actions.updateCategory(e.currentTarget.value)}
            >
              <option value=""> </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Appetizer/Snack">Appetizer/Snack</option>
            </select>
          </div>
        </div>
      </div>
      {/* <div> */}
      <AddIngredientForm actions={actions} />
      <AddInstructionForm actions={actions} />
      {/* </div> */}
    </div>
  )
}
