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

const addInstructionButtonCss = css`
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
        <button css={addInstructionButtonCss} type="button" onClick={addInstructionHandler}>
          Add Instruction
        </button>
      </form>
    </div>
  )
}
