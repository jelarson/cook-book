import React, { useState, useEffect } from 'react'
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
  // const { setRecipeInstructions, recipeInstructions } = props
  const { setRecipeInstructions, instructionsArr } = props

  const [formInput, setFormInput] = useState('')
  // const instructionArr = recipeInstructions

  function addInstructionHandler() {
    instructionsArr.push(formInput)
    console.log('before', instructionsArr)
    setFormInput('')
    // setRecipeInstructions([...instructionsArr])
    console.log('after', instructionsArr)
  }

  // useEffect(() => {
  // setRecipeInstructions(instructionsArr)
  // }, [instructionsArr])

  // useEffect(() => {
  //   setRecipeInstructions(instructionsArr)
  //   console.log('after', instructionsArr)
  // }, [formInput])

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
