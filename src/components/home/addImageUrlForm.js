import React, { useState } from 'react'
import { css } from '@emotion/core'

const imageHeaderCss = css`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`

const buttonAndInputWrapperCss = css`
  display: flex;
  margin-top: 4px;
  flex-direciton: row;
  width: 100%;
  justify-content: space-around;
`

const imageInputWrapperCss = css`
  display: flex;
  // width: 100%;
  justify-content: center;
`

const imageInputCss = css`
  border: 2px solid black;
  // width: 60%;
  border-radius: 7px;
  // margin-right: 3px;
  // height: 18px;
`

const addImageButtonCss = css`
  background-color: grey;
  color: white;
  border: black 2px solid;
  border-radius: 7px;
  cursor: pointer;
  // margin-left: 3px;
  font-size: 0.7em;

  &:hover {
    background-color: maroon;
    color: white;
  }
`

export default function AddImageUrlForm(props) {
  const { actions } = props
  const [imageUrl, setImageUrl] = useState('')

  function handleImageButtonClick() {
    actions.updateImageUrl(imageUrl)
    reset()
  }

  function reset() {
    setImageUrl('')
  }

  return (
    <div>
      <div css={imageHeaderCss}>Recipe Image URL (optional):</div>
      <div css={buttonAndInputWrapperCss}>
        <div css={imageInputWrapperCss}>
          <input
            css={imageInputCss}
            placeholder="Add Image URL here!"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.currentTarget.value)}
          />
        </div>
        <button css={addImageButtonCss} type="button" onClick={handleImageButtonClick}>
          Add Image
        </button>
      </div>
    </div>
  )
}
