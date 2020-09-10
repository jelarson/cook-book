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
  // const [mathcingComments, setMatchingComments] = useState([])
  const myArr = []
  // const [currentComment, setCurrentComment] = useState()
  // const [testArr, setTestArr] = useState([])

  const generateArr = useMemo(() => {
    axios.get(`https://jel-family-cookbook-db.herokuapp.com/comments`).then((response) => {
      response.data.forEach((comment) => {
        if (Number(comment.recipeID) === Number(id)) {
          myArr.push({ name: comment.name, comment: comment.recipeComment })
          // setCurrentComment({ name: comment.name, comment: comment.recipeComment })
        }
      })
    })
  }, [id, myArr])

  useEffect(() => {
    generateArr()
  }, [generateArr])

  // useEffect(() => {
  // axios.get(`https://jel-family-cookbook-db.herokuapp.com/comments`).then((response) => {
  //   response.data.forEach((comment) => {
  //     if (Number(comment.recipeID) === Number(id)) {
  //       myArr.push({ name: comment.name, comment: comment.recipeComment })
  //     }
  //   })
  //   })
  // }, [id, myArr])

  // useEffect(() => {
  //   setMatchingComments([...myArr])
  //   console.log('myArr', myArr)
  // }, [myArr])

  // useEffect(() => {
  //   axios.get(`https://jel-family-cookbook-db.herokuapp.com/comments`).then((response) => {
  //     response.data.forEach((comment) => {
  //       if (Number(comment.recipeID) === Number(id)) {
  //         myArr.push({ name: comment.name, comment: comment.recipeComment })
  //       }
  //     })
  //   })
  // }, [id])

  return (
    <div css={commentsWrapperCss}>
      <div>Recipe Comments</div>
      <div css={commentBoxWrapperCss}>
        {myArr.map((comment) => {
          return <li>{`${comment.name} - ${comment.comment}`}</li>
        })}
        <div>Name PH</div>
        <div>content placeholder</div>
      </div>
      <NewComment />
    </div>
  )
}
