import React from 'react'
import { css } from '@emotion/core'

const addInstructionWrapperCss = css`
  display: flex;
`

export default function AddInstructionForm() {
  return (
    <div css={addInstructionWrapperCss}>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}
