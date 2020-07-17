import React from 'react'
import { css } from '@emotion/core'

const navbarLinkDivCss = css`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const navbarLinkCss = css`
  // padding: 4px;
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: white;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`

export default function NavbarButton(props) {
  const { path, buttonText } = props
  return (
    <div css={navbarLinkDivCss}>
      <a href={path} css={navbarLinkCss}>
        {buttonText}
      </a>
    </div>
  )
}
