import React from 'react'
import { css } from '@emotion/core'
import NewComment from './newComment'

const commentsWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const commentBoxWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: grey;
`

export default function RecipeComments() {
  return (
    <div css={commentsWrapperCss}>
      <div>Recipe Comments</div>
      <div css={commentBoxWrapperCss}>
        <div>Title Placeholder</div>
        <div>content placeholder</div>
      </div>
      <NewComment />
    </div>
  )
}
