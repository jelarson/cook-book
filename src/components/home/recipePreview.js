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

const previewHeaderWrapper = css`
  display: flex;
`

const titleCategoryWrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const previewTitleCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: underline;
  text-align: center;
`
const previewCategoryCss = css`
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: grey;
`

const previewImageContainerCss = css`
  display: flex;
  justify-content: center;
  width: 50%;
`

const previewImageWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
  padding: top: 100%;
  border: 2px solid black;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const previewImageWrapperHiddenCss = css`
  display: none;
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
        <div css={previewHeaderWrapper}>
          <div css={titleCategoryWrapperCss}>
            <div css={previewTitleCss}>{recipeState.title}</div>
            <div css={previewCategoryCss}>{recipeState.category}</div>
          </div>
          <div css={recipeState.imageUrl.length > 1 ? previewImageContainerCss : previewImageWrapperHiddenCss}>
            <div css={previewImageWrapperCss}>
              <img src={recipeState.imageUrl} alt="Recipe thumbnail" />
            </div>
          </div>
        </div>
        <div>
          <ul>{populateIngredients()}</ul>
        </div>
        <div>{populateInstructions()}</div>
      </div>
    </div>
  )
}
