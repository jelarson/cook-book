import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

const recipeItemPageWrapperCss = css`
  display: flex;
  flex-direction: column;
`

const recipeTitleCss = css`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.7em;
`
const recipeItemRecipeWrapperCss = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const recipeImageCss = css`
  display: flex;
  width: 40vw;
  align-items: center;
  justify-content: center;
`

const recipeContentWrapperCss = css`
  display: flex;
  width: 40vw;
  border: 2px solid black;
`

export default function RecipeItemPage(props) {
  const { location } = props
  const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = location.state

  return (
    <div>
      <Navbar />
      <div css={recipeItemPageWrapperCss}>
        <div css={recipeTitleCss}>{name}</div>
        <div css={recipeItemRecipeWrapperCss}>
          <div css={recipeImageCss}>
            Image Placeholder
            {image}
          </div>
          <div css={recipeContentWrapperCss}>
            {ingredients}
            {instructions}
          </div>
        </div>
      </div>
      <div>
        {category}
        {id}
        {thumbsUp}
        {thumbsDown}
        {favorite}
      </div>
      <Footer />
    </div>
  )
}
