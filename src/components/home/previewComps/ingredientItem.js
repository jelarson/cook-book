import React from 'react'
import { css } from '@emotion/core'

export default function IngredientItem(props) {
  const { ingredient } = props
  return <li>{ingredient}</li>
}
