import React from 'react'
import { css } from '@emotion/core'

const addIngredientWrapperCss = css`
  display: flex;
`

export default function AddIngredientForm() {
  return (
    <div css={addIngredientWrapperCss}>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}
