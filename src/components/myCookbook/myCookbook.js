import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import FilterBar from '../filterBar/filterBar'
import Footer from '../footer/footer'

const myCookbookPageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const myCookbookContentWrapperCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function MyCookbook() {
  return (
    <div css={myCookbookPageWrapperCss}>
      <Navbar />
      <FilterBar />
      <div css={myCookbookContentWrapperCss}>Hello from body content - my cookbook</div>
      <Footer />
    </div>
  )
}
