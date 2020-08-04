import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

import InstructionItem from './previewComps/instructionItems'

const recipePreviewWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const recipePreviewContentWrapperCss = css`
  width: 100%;
  height: 400px;
  border-left: 4px solid black;
  padding: 7px;
  display: flex;
  flex-direction: column;
`

const previewTitleCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`

export default function RecipePreview(props) {
  const { recipeTitle, recipeCategory, recipeIngredients, recipeInstructions } = props
  const [modifiedCategory, setModifiedCategory] = useState('')

  useEffect(() => {
    if (recipeCategory.length > 1) {
      setModifiedCategory(` - ${recipeCategory}`)
    }
  }, [recipeCategory])

  function populateInstructions() {
    return recipeInstructions.map((instruction) => {
      return <InstructionItem instruction={instruction} />
    })
  }

  return (
    <div css={recipePreviewWrapperCss}>
      <div>Your Recipe Preview</div>
      <div css={recipePreviewContentWrapperCss}>
        <div css={previewTitleCss}>
          {recipeTitle} {modifiedCategory}
        </div>
        <div>
          <ul>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
            <li>ingredient placeholder</li>
          </ul>
        </div>
        <div>
          {/* <InstructionItem />
          <InstructionItem />
          <InstructionItem /> */}
          {populateInstructions}
        </div>
      </div>
    </div>
  )
}
