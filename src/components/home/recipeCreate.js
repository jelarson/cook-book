import React, { useState } from 'react'
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

export default function RecipeCreate() {
  const [recipeTitle, setRecipeTitle] = useState(' ')
  const [recipeCategory, setRecipeCategory] = useState(' ')
  const [recipeIngredients, setRecipeIngredients] = useState(' ')
  const [recipeInstructions, setRecipeInstructions] = useState(' ')

  return (
    <div css={recipeCreateWrapperCss}>
      <div css={recipeCreateTitleCss}>Add Your Own Recipe</div>
      <div css={recipeCreateContentWrapperCss}>
        <CreateForm
          setRecipeTitle={setRecipeTitle}
          setRecipeCategory={setRecipeCategory}
          setRecipeIngredients={setRecipeIngredients}
          setRecipeInstructions={setRecipeInstructions}
        />
        <RecipePreview
          recipeTitle={recipeTitle}
          recipeCategory={recipeCategory}
          recipeIngredients={recipeIngredients}
          recipeInstructions={recipeInstructions}
        />
      </div>
      <button type="button">Submit</button>
    </div>
  )
}
