import React from 'react'
import { css } from '@emotion/core'

const cardButtonWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 15vw;
    margin-bottom: 7px;
    background-color: black;
    color: white;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
      color: yellow;
    }
  }
`

export default function CardBottomButton() {
  return (
    <div css={cardButtonWrapper}>
      <button type="button">View Recipe</button>
    </div>
  )
}
