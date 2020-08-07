import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

const addIngredientWrapperCss = css`
  display: flex;
`

export default function AddIngredientForm(props) {
  const { acitons } = props
  const [wholeMeasurement, setWholeMeasurement] = useState('0')
  const [partialMeasurement, setPartialMeasurement] = useState('0')
  const [measurementType, setMeasurementType] = useState('')
  const [ingredientName, setIngredientName] = useState('')
  // const [finalStr, setFinalStr] = useState('')

  function handleIngredientAdd() {
    if (wholeMeasurement !== '0' && partialMeasurement !== '0') {
      acitons.updateIngredients(`${wholeMeasurement} and ${partialMeasurement} ${measurementType} of ${ingredientName}`)
      // setFinalStr(`${wholeMeasurement} and ${partialMeasurement} ${measurementType} of ${ingredientName}`)
    }
    if (wholeMeasurement === '0' && partialMeasurement !== '0') {
      acitons.updateIngredients(`${partialMeasurement} ${measurementType} of ${ingredientName}`)
      // setFinalStr(`${partialMeasurement} ${measurementType} of ${ingredientName}`)
    }
    if (wholeMeasurement !== '0' && partialMeasurement === '0') {
      acitons.updateIngredients(`${wholeMeasurement} ${measurementType} of ${ingredientName}`)
      // setFinalStr(`${wholeMeasurement} ${measurementType} of ${ingredientName}`)
    }
    if (wholeMeasurement === '0' && partialMeasurement === '0') {
      alert('please fill in either or both partial and whole measurements')
    }
  }

  // useEffect(() => {
  //   console.log('this is my final string', finalStr)
  // }, [finalStr])

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
            <option value="teaspoons">teaspoons</option>
            <option value="tablespoons">tablespoons</option>
            <option value="cups">cups</option>
            <option value="pints">pints</option>
            <option value="quarts">quarts</option>
            <option value="ounces">Ounces</option>
            <option value="grams">Grams</option>
            <option value="count">Count</option>
          </select>
          of
          <input type="text" onChange={(e) => setIngredientName(e.currentTarget.value)} />
          <button type="button" onClick={handleIngredientAdd}>
            Add
          </button>
          {/* <br />
          <button type="button">Add Ingredient</button>
          <button type="button">Add Instruction</button> */}
        </div>
      </form>
    </div>
  )
}
