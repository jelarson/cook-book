import React from 'react'
import { css } from '@emotion/core'

import FilterButton from './filterButton'

const filterBarWrapperCss = css`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`
// const buttonWrapperCss = css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 16vw;
//   height: 45px;

//   button {
//     background-color: white;
//     width: 100%;
//     height: 35px;
//     outline: none;
//     border: none;
//     font-size: 1.3em;

//     &:hover {
//       background-color: maroon;
//       color: white;
//     }
//   }
// `

export default function FilterBar() {
  return (
    <div css={filterBarWrapperCss}>
      {/* <div css={buttonWrapperCss}>
        <button type="button">Breakfast</button>
      </div>
      <div css={buttonWrapperCss}>
        <button type="button">Lunch</button>
      </div>
      <div css={buttonWrapperCss}>
        <button type="button">Dinner</button>
      </div>
      <div css={buttonWrapperCss}>
        <button type="button">Appetizer</button>
      </div>
      <div css={buttonWrapperCss}>
        <button type="button">Dessert</button>
      </div>
      <div css={buttonWrapperCss}>
        <button type="button">All Recipes</button>
      </div> */}
      <FilterButton buttonName="Breakfast" />
      <FilterButton buttonName="Lunch" />
      <FilterButton buttonName="Dinner" />
      <FilterButton buttonName="Appetizer/Snack" />
      <FilterButton buttonName="Dessert" />
      <FilterButton buttonName="All Recipes" />
    </div>
  )
}
