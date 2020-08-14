import React, { useState } from 'react'
import { css } from '@emotion/core'

const imageHeaderCss = css`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`

const imageInputWrapperCss = css`
  display: flex;
  width: 100%;
  justify-content: center;
`

const imageInputCss = css`
  border: 2px solid black;
  width: 80%;
  border-radius: 7px;
`

export default function AddImageUrlForm(props) {
  const { actions } = props
  const [imageUrl, setImageUrl] = useState('')

  function handleImageButtonClick() {
    actions.updateImageUrl(imageUrl)
  }

  return (
    <div>
      <div css={imageHeaderCss}>Recipe Image URL (optional):</div>
      <div css={imageInputWrapperCss}>
        <input css={imageInputCss} type="text" onChange={(e) => setImageUrl(e.currentTarget.value)} />
      </div>
      <button type="button" onClick={handleImageButtonClick}>
        Add Image
      </button>
    </div>
  )
}
