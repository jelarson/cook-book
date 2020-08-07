import React, { useState } from 'react'
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

export default function AddInstructionForm(props) {
  const { actions } = props

  const [formInput, setFormInput] = useState('')

  function addInstructionHandler() {
    actions.updateInstructions(formInput)
    setFormInput('')
  }

  return (
    <div css={addInstructionWrapperCss}>
      <form css={instructionFormWrapperCss}>
        <textarea css={instructionInputCss} onChange={({ target }) => setFormInput(target.value)} value={formInput} />
        <button type="button" onClick={addInstructionHandler}>
          Add Instruction
        </button>
      </form>
    </div>
  )
}
