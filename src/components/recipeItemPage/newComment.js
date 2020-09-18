import React, { useState } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'

const commentAddWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function NewComment(props) {
  const { id, setRender, render } = props
  const [nameInput, setNameInput] = useState('')
  const [commentInput, setCommentInput] = useState('')

  function handleSubmit() {
    if (nameInput.length < 1 || commentInput.length < 1) {
      alert('Please fill in both name and comment fields')
    } else {
      axios.post(`https://jel-family-cookbook-db.herokuapp.com/comment`, {
        name: nameInput,
        recipeID: String(id),
        recipeComment: commentInput,
      })
      setNameInput('')
      setCommentInput('')
      setRender(!render)
      console.log(render)
    }
  }

  return (
    <div css={commentAddWrapperCss}>
      <div>Add new comment</div>
      <div>
        <div>name:</div>
        <input type="text" onChange={({ target }) => setNameInput(target.value)} />
      </div>
      <div>
        <div>comment:</div>
        <textarea onChange={({ target }) => setCommentInput(target.value)} />
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
