import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

const cardButtonWrapperCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const cardButtonLinkCss = css`
  width: 15vw;
  margin-bottom: 7px;
  padding: 2px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 1.3em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`

export default function CardBottomButton(props) {
  // const { name, category, image, id, ingredients, instructions } = props
  const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = props

  return (
    <div css={cardButtonWrapperCss}>
      <Link
        css={cardButtonLinkCss}
        to={{
          pathname: 'viewrecipe',
          // state: { name, category, image, id, ingredients, instructions },
          state: { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite },
        }}
      >
        View Recipe
      </Link>
    </div>
  )
}
