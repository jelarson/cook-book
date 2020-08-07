import React from 'react'
import { css } from '@emotion/core'

import InstructionItem from './previewComps/instructionItems'
import IngredientItem from './previewComps/ingredientItem'

const recipePreviewWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const recipePreviewContentWrapperCss = css`
  width: 100%;
  height: 400px;
  border-left: 4px solid black;
  padding: 7px;
  display: flex;
  flex-direction: column;
`

const previewTitleCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`

export default function RecipePreview(props) {
  const { recipeState } = props

  function populateInstructions() {
    return recipeState.instructions.map((instruction) => {
      return <InstructionItem instruction={instruction} />
    })
  }

  function populateIngredients() {
    return recipeState.ingredients.map((ingredient) => {
      return <IngredientItem ingredient={ingredient} />
    })
  }

  return (
    <div css={recipePreviewWrapperCss}>
      <div>Your Recipe Preview</div>
      <div css={recipePreviewContentWrapperCss}>
        <div css={previewTitleCss}>
          {recipeState.title} {recipeState.category}
        </div>
        <div>
          <ul>{populateIngredients()}</ul>
        </div>
        <div>{populateInstructions()}</div>
      </div>
    </div>
  )
}
