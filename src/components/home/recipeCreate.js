import React from 'react'
import { css } from '@emotion/core'

import RecipePreview from './recipePreview'
import CreateForm from './createForm'
import useRecipeStateHook from './recipeStateHook'

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

export default function RecipeCreate() {
  const { recipeState, actions } = useRecipeStateHook()

  function handleClear() {
    actions.clearRecipe()
  }

  return (
    <div css={recipeCreateWrapperCss}>
      <div css={recipeCreateTitleCss}>Add Your Own Recipe</div>
      <div css={recipeCreateContentWrapperCss}>
        <CreateForm actions={actions} />
        <RecipePreview recipeState={recipeState} />
      </div>
      <button type="button">Submit</button>
      <button
        type="button"
        onClick={() => {
          handleClear()
        }}
      >
        Clear All
      </button>
    </div>
  )
}
