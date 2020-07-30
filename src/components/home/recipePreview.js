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
`

export default function RecipePreview() {
  return (
    <div css={recipePreviewWrapperCss}>
      <div>Your Recipe Preview</div>
      <div css={recipePreviewContentWrapperCss}>recipe content placeholder</div>
    </div>
  )
}
