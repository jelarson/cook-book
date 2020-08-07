import React, { useState } from 'react'
import { css } from '@emotion/core'

const addIngredientWrapperCss = css`
  display: flex;
`

export default function AddIngredientForm(props) {
  const { actions } = props
  const [wholeMeasurement, setWholeMeasurement] = useState('0')
  const [partialMeasurement, setPartialMeasurement] = useState('0')
  const [measurementType, setMeasurementType] = useState('')
  const [ingredientName, setIngredientName] = useState('')

  function handleIngredientAdd() {
    if (ingredientName !== '') {
      if (wholeMeasurement !== '0' && partialMeasurement !== '0' && measurementType === '') {
        actions.updateIngredients(`${wholeMeasurement} and ${partialMeasurement} ${ingredientName}`)
      }
      if (wholeMeasurement !== '0' && partialMeasurement !== '0' && measurementType !== '') {
        actions.updateIngredients(
          `${wholeMeasurement} and ${partialMeasurement} ${measurementType} of ${ingredientName}`
        )
      }
      if (wholeMeasurement === '0' && partialMeasurement !== '0' && measurementType === '') {
        actions.updateIngredients(`${partialMeasurement} ${ingredientName}`)
      }
      if (wholeMeasurement === '0' && partialMeasurement !== '0' && measurementType !== '') {
        actions.updateIngredients(`${partialMeasurement} ${measurementType} of ${ingredientName}`)
      }
      if (wholeMeasurement !== '0' && partialMeasurement === '0' && measurementType === '') {
        actions.updateIngredients(`${wholeMeasurement} ${ingredientName}`)
      }
      if (wholeMeasurement !== '0' && partialMeasurement === '0' && measurementType !== '') {
        actions.updateIngredients(`${wholeMeasurement} ${measurementType} of ${ingredientName}`)
      }
      if (wholeMeasurement === '0' && partialMeasurement === '0') {
        alert('please fill in either or both partial and whole measurements')
      }
    } else {
      alert('Please add an ingredient name')
    }
  }

  return (
    <div css={addIngredientWrapperCss}>
      <form>
        <div>
          <select name="whole-measurement-num" onChange={(e) => setWholeMeasurement(e.currentTarget.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          and
          <select name="partial-measurement-num" onChange={(e) => setPartialMeasurement(e.currentTarget.value)}>
            <option value="0">0</option>
            <option value="1/8">1/8</option>
            <option value="1/4">1/4</option>
            <option value="1/3">1/3</option>
            <option value="1/2">1/2</option>
            <option value="2/3">2/3</option>
            <option value="3/4">3/4</option>
          </select>
          <select name="measurement-name" onChange={(e) => setMeasurementType(e.currentTarget.value)}>
            <option value="blank"> </option>
            <option value="tsp.">teaspoons</option>
            <option value="tbsp.">tablespoons</option>
            <option value="c.">cups</option>
            <option value="qt.">quarts</option>
            <option value="pt.">pints</option>
            <option value="gal.">Gallon</option>
            <option value="oz.">Ounces</option>
            <option value="g.">Grams</option>
            <option value="lb.">Pounds</option>
            <option value="pkg.">Packages</option>
            <option value="ct.">Count</option>
          </select>
          of
          <input type="text" onChange={(e) => setIngredientName(e.currentTarget.value)} />
          <button type="button" onClick={handleIngredientAdd}>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
