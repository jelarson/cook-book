import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import RecipeCreate from './recipeCreate'
import Footer from '../footer/footer'

const homePageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const homeContentWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function Home() {
  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div css={homeContentWrapperCss}>
        <RecipeCreate />
      </div>
      <Footer />
    </div>
  )
}
