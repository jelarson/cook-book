import React, { useState } from 'react'
import { css } from '@emotion/core'

const addInstructionWrapperCss = css`
  display: flex;
`
const instructionInputCss = css`
  width: 100%;
  outline: none;
  resize: none;
  height: 65px;
  border: 2px solid black;
  border-radius: 7px;
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
        <textarea
          css={instructionInputCss}
          placeholder="Add Instruction here!"
          onChange={({ target }) => setFormInput(target.value)}
          value={formInput}
        />
        <button type="button" onClick={addInstructionHandler}>
          Add Instruction
        </button>
      </form>
    </div>
  )
}
