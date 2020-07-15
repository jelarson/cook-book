import React from 'react'
import { css } from '@emotion/core'

export default function Home() {
  return (
    <div>
      <div>Hello From Home Header</div>
      <div>
        Hello From Home Body
        <br />
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
        </select>
        of
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button type="button">Add Ingredient</button>
        <button type="button">Add Instruction</button>
      </div>
    </div>
  )
}
