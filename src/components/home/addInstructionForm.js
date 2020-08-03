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

export default function AddInstructionForm() {
  const [formInput, setFormInput] = useState('')
  const instructionArr = []

  function addInstructionHandler() {
    instructionArr.push(formInput)
    console.log('before', instructionArr)
    setFormInput('')
    console.log('after', instructionArr)
  }

  return (
    <div css={addInstructionWrapperCss}>
      <form css={instructionFormWrapperCss}>
        {/* <input type="text" /> */}
        <textarea css={instructionInputCss} onChange={({ target }) => setFormInput(target.value)} value={formInput} />
        <button type="button" onClick={addInstructionHandler}>
          Add Instruction
        </button>
      </form>
    </div>
  )
}
