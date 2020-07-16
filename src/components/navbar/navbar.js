import React from 'react'
import { css } from '@emotion/core'

const navbarWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const navbarTitleCss = css`
  font-size: 1.3em;
`

const navbarLinksWrapperCss = css`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`

export default function Navbar() {
  return (
    <div css={navbarWrapperCss}>
      <div css={navbarTitleCss}>Title</div>
      <div css={navbarLinksWrapperCss}>
        <div>sidebar</div>
        <div>sidebar</div>
        <div>sidebar</div>
      </div>
    </div>
  )
}
