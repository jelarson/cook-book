import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import FilterBar from '../filterBar/filterBar'

const allRecipePageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const allRecipeContentWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function AllRecipes() {
  return (
    <div css={allRecipePageWrapperCss}>
      <Navbar />
      <FilterBar />
      <div css={allRecipeContentWrapperCss}>Hello from body content - all recipes</div>
    </div>
  )
}
