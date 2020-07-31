import React from 'react'
import { css } from '@emotion/core'

const imageWrapperCss = css`
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

export default function CardImage(props) {
  const { image } = props
  return (
    <div css={imageWrapperCss}>
      <img src={image} alt="Recipe Hero" />
    </div>
  )
}
