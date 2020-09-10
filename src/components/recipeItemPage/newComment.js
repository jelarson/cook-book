import React from 'react'
import { css } from '@emotion/core'

const commentAddWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function NewComment() {
  return (
    <div css={commentAddWrapperCss}>
      <div>Add new comment</div>
      <div>
        <div>name:</div>
        <input type="text" />
      </div>
      <div>
        <div>comment:</div>
        <textarea />
      </div>
      <button type="button">Submit</button>
    </div>
  )
}
