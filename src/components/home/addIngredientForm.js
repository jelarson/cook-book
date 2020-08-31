/* eslint-disable no-alert */
import React, { useState } from 'react'
import { css } from '@emotion/core'

const addIngredientWrapperCss = css`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
`

const formWrapperCss = css`
  display: flex;
  width: 100%;
`

const inputContentCss = css`
  margin-right: 4px;
  border: 2px solid black;
  border-radius: 7px;
`

const splitInputWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 45px;
`

const fillerWordCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 4px;
`

const subtitleWrapperCss = css`
  font-size: 0.6em;
  color: grey;
  width: 100%;
  display: flex;
  justify-content: center;
`

const addIngredientButtonCss = css`
  background-color: grey;
  color: white;
  border: black 2px solid;
  border-radius: 7px;
  cursor: pointer;
  // margin-left: 3px;
  font-size: 0.7em;

  &:hover {
    background-color: maroon;
    color: white;
  }
`

export default function AddIngredientForm(props) {
  const { actions } = props
  const [wholeMeasurement, setWholeMeasurement] = useState('0')
  const [partialMeasurement, setPartialMeasurement] = useState('0')
  const [measurementType, setMeasurementType] = useState('')
  const [ingredientName, setIngredientName] = useState('')

  function reset() {
    setWholeMeasurement('0')
    setPartialMeasurement('0')
    setMeasurementType('')
    setIngredientName('')
  }

  function handleIngredientAdd() {
    if (ingredientName !== '') {
      if (wholeMeasurement !== '0' && partialMeasurement !== '0' && measurementType === '') {
        actions.updateIngredients(`${wholeMeasurement} and ${partialMeasurement} ${ingredientName}`)
        reset()
      }
      if (wholeMeasurement !== '0' && partialMeasurement !== '0' && measurementType !== '') {
        actions.updateIngredients(
          `${wholeMeasurement} and ${partialMeasurement} ${measurementType} of ${ingredientName}`
        )
        reset()
      }
      if (wholeMeasurement === '0' && partialMeasurement !== '0' && measurementType === '') {
        actions.updateIngredients(`${partialMeasurement} ${ingredientName}`)
        reset()
      }
      if (wholeMeasurement === '0' && partialMeasurement !== '0' && measurementType !== '') {
        actions.updateIngredients(`${partialMeasurement} ${measurementType} of ${ingredientName}`)
        reset()
      }
      if (wholeMeasurement !== '0' && partialMeasurement === '0' && measurementType === '') {
        actions.updateIngredients(`${wholeMeasurement} ${ingredientName}`)
        reset()
      }
      if (wholeMeasurement !== '0' && partialMeasurement === '0' && measurementType !== '') {
        actions.updateIngredients(`${wholeMeasurement} ${measurementType} of ${ingredientName}`)
        reset()
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
      <form css={formWrapperCss}>
        <div css={formWrapperCss}>
          <div css={splitInputWrapperCss}>
            <div css={subtitleWrapperCss}>Whole</div>
            <select
              css={inputContentCss}
              name="whole-measurement-num"
              onChange={(e) => setWholeMeasurement(e.currentTarget.value)}
              value={wholeMeasurement}
            >
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
          </div>
          <div css={fillerWordCss}>{`${'and '}`}</div>
          <div css={splitInputWrapperCss}>
            <div css={subtitleWrapperCss}>partial</div>
            <select
              css={inputContentCss}
              name="partial-measurement-num"
              onChange={(e) => setPartialMeasurement(e.currentTarget.value)}
              value={partialMeasurement}
            >
              <option value="0">0</option>
              <option value="1/8">1/8</option>
              <option value="1/4">1/4</option>
              <option value="1/3">1/3</option>
              <option value="1/2">1/2</option>
              <option value="2/3">2/3</option>
              <option value="3/4">3/4</option>
            </select>
          </div>
          <div css={splitInputWrapperCss}>
            <div css={subtitleWrapperCss}>Type </div>
            <select
              css={inputContentCss}
              name="measurement-name"
              onChange={(e) => setMeasurementType(e.currentTarget.value)}
              value={measurementType}
            >
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
          </div>
          <div css={fillerWordCss}>{`${'of '}`}</div>
          <div css={splitInputWrapperCss}>
            <div css={subtitleWrapperCss}>Name </div>
            <input
              css={inputContentCss}
              type="text"
              onChange={(e) => setIngredientName(e.currentTarget.value)}
              value={ingredientName}
            />
          </div>
          <button css={addIngredientButtonCss} type="button" onClick={handleIngredientAdd}>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
