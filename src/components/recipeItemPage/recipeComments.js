import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'
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

export default function RecipeComments(props) {
  const { id } = props
  const [Comments, setAllComments] = useState([])
  const myArr = []

  useEffect(() => {
    axios.get(`https://jel-family-cookbook-db.herokuapp.com/comments`).then((response) => {
      response.data.forEach((comment) => {
        if (Number(comment.recipeID) === Number(id)) {
          myArr.push({ name: comment.name, comment: comment.recipeComment })
        }
      })
    })
  }, [id])

  return (
    <div css={commentsWrapperCss}>
      <div>Recipe Comments</div>
      <div css={commentBoxWrapperCss}>
        <div>Name PH</div>
        <div>content placeholder</div>
      </div>
      <NewComment />
    </div>
  )
}
