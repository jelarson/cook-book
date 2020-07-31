import React from 'react'
import { css } from '@emotion/core'

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
  const { recipeTitle, recipeCategory, recipeIngredients, recipeInstructions } = props
  return (
    <div css={recipePreviewWrapperCss}>
      <div>Your Recipe Preview</div>
      <div css={recipePreviewContentWrapperCss}>
        <div css={previewTitleCss}>
          {recipeTitle} - {recipeCategory}
        </div>
        <div>
          <ul>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
          </ul>
        </div>
        <div>
          Instructions placeholder, instructions placeholder, instructions placeholder, instructions placeholder,
          instructions placeholder, instructions placeholder, instructions placeholder, instructions placeholder,
          instructions placeholder, instructions placeholder
        </div>
      </div>
    </div>
  )
}
