import React from 'react'
import { css } from '@emotion/core'

const footerWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: grey;
  margin-top: 30px;
`

export default function Footer() {
  return (
    <div css={footerWrapperCss}>
      <div>This is a placeholder for the footer content</div>
    </div>
  )
}
