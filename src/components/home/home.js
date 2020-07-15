import React from 'react'
import { css } from '@emotion/core'

export default function Home() {
  return (
    <div>
      <div>Hello From Home Header</div>
      <div>
        Hello From Home Body
        <label htmlFor="cars">Choose a car:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
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
