import React from 'react'
import { css } from '@emotion/core'

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
  flex-direction: column;
  border-top: 3px black solid;
  width: 100%;
`
const buttonWrapperCss = css`
  display: flex;
  justify-content: center;

  button {
    margin: 8px 8px 0 8px;
  }
`

export default function RecipeCreate() {
  return (
    <div css={recipeCreateWrapperCss}>
      <div css={recipeCreateTitleCss}>Create your own recipe</div>
      <div css={recipeCreateContentWrapperCss}>
        <div css={buttonWrapperCss}>
          <button type="button">Add an Ingredient</button>
          <button type="button">Add an Instruction</button>
        </div>
      </div>
    </div>
  )
}
