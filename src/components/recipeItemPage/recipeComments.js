import React, { useState, useEffect, useCallback, useMemo } from 'react'
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
  const [mathcingComments, setMatchingComments] = useState([])

  const generateArr = useCallback(() => {
    axios.get(`https://jel-family-cookbook-db.herokuapp.com/comments`).then((response) => {
      response.data.forEach((comment) => {
        if (Number(comment.recipeID) === Number(id)) {
          setMatchingComments((previousValue) => {
            return [...previousValue, { name: comment.name, comment: comment.recipeComment }]
          })
        }
      })
    })
  }, [id])

  useEffect(() => {
    generateArr()
  }, [generateArr])

  useEffect(() => {
    console.log('here are the comments:', mathcingComments)
  }, [mathcingComments])

  return (
    <div css={commentsWrapperCss}>
      <div>Recipe Comments</div>
      <div css={commentBoxWrapperCss}>
        {mathcingComments.map((comment) => {
          return <li>{`${comment.name} - ${comment.comment}`}</li>
        })}
        <div>Name PH</div>
        <div>content placeholder</div>
      </div>
      <NewComment />
    </div>
  )
}
