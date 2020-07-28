import React from 'react'
import { css } from '@emotion/core'

const buttonWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16vw;
  height: 45px;

  button {
    background-color: white;
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    font-size: 1em;

    &:hover {
      background-color: maroon;
      color: white;
    }
  }
`

export default function FilterButton(props) {
  const { buttonName } = props
  return (
    <div css={buttonWrapperCss}>
      <button type="button">{buttonName}</button>
    </div>
  )
}
