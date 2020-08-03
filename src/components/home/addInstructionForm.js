import React from 'react'
import { css } from '@emotion/core'

const addInstructionWrapperCss = css`
  display: flex;
`
const instructionInputCss = css`
  width: 100%;
`
const instructionFormWrapperCss = css`
  width: 90%;
`

export default function AddInstructionForm() {
  return (
    <div css={addInstructionWrapperCss}>
      <form css={instructionFormWrapperCss}>
        {/* <input type="text" /> */}
        <textarea css={instructionInputCss} />
        <button type="button">Add an Instruction</button>
      </form>
    </div>
  )
}
