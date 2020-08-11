import React from 'react'
import { css } from '@emotion/core'

export default function AddImageUrlForm(props) {
  const { actions } = props
  return (
    <div>
      <div>Recipe Image URL (optional)</div>
      <input type="text" onChange={(e) => actions.updateImageUrl(e.currentTarget.value)} />
    </div>
  )
}
