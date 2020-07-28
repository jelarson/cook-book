import React from 'react'
import { css } from '@emotion/core'

const cardWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 4px solid black;
  width: 20vw;
  height: 300px;
  margin-top: 30px;
`

export default function RecipeCard(props) {
  const { recipeObj } = props
  return <div css={cardWrapperCss}>{recipeObj.name}</div>
}
