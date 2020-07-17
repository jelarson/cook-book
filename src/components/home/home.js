import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'

const homePageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Home() {
  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div>
        <select name="whole-measurement-num">
          <option value="blank"> </option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
          <option value="nine">9</option>
          <option value="ten">10</option>
        </select>
        and
        <select name="partial-measurement-num">
          <option value="blank"> </option>
          <option value="oneEighth">1/8</option>
          <option value="oneQuarter">1/4</option>
          <option value="oneThird">1/3</option>
          <option value="oneHalf">1/2</option>
          <option value="twoThirds">2/3</option>
          <option value="threeQuarters">3/4</option>
        </select>
        <select name="partial-measurement-num">
          <option value="blank"> </option>
          <option value="teaspoons">teaspoons</option>
          <option value="tablespoons">tablespoons</option>
          <option value="cups">cups</option>
          <option value="pints">pints</option>
          <option value="quarts">quarts</option>
          <option value="ounces">Ounces</option>
          <option value="grams">Grams</option>
        </select>
        of
        <input type="text" />
        <button type="button">Add</button>
        <br />
        <button type="button">Add Ingredient</button>
        <button type="button">Add Instruction</button>
      </div>
    </div>
  )
}
