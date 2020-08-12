import React, { useState } from 'react'
import { css } from '@emotion/core'

export default function AddImageUrlForm(props) {
  const { actions } = props
  const [imageUrl, setImageUrl] = useState('')

  function handleImageButtonClick() {
    actions.updateImageUrl(imageUrl)
  }

  return (
    <div>
      <div>Recipe Image URL (optional)</div>
      <input type="text" onChange={(e) => setImageUrl(e.currentTarget.value)} />
      <button type="button" onClick={handleImageButtonClick}>
        Add Image
      </button>
    </div>
  )
}
