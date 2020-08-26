import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import AddRating from './addRating'
import Favorite from './favorite'

const recipeItemPageWrapperCss = css`
  display: flex;
  flex-direction: column;
`

const recipeTitleCss = css`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.7em;
  text-align: center;

  span {
    font-size: 1.3em;
    color: grey;
  }
`
const recipeItemRecipeWrapperCss = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const recipeImageCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  // height: 15vw;
  // padding: top: 100%;
  border: 2px solid black;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const recipeContentWrapperCss = css`
  display: flex;
  width: 40vw;
  border: 2px solid black;
`

export default function RecipeItemPage(props) {
  const { location } = props
  const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = location.state

  function displayIngredients() {
    console.log(ingredients.split(', '))
    return ingredients.split(', ').map((ingredient) => {
      return <li>{ingredient}</li>
    })
  }

  function displayInstructions() {
    console.log(instructions.split(', '))
    return instructions.split(', ').map((instruction) => {
      return <div>{instruction}</div>
    })
  }

  return (
    <div>
      <Navbar />
      <div css={recipeItemPageWrapperCss}>
        <div css={recipeTitleCss}>
          {name}
          <br />
          <span>{category}</span>
        </div>
        <div css={recipeItemRecipeWrapperCss}>
          <div css={recipeImageCss}>
            <img src={image} alt="Recipe thumbnail" />
          </div>
          <div css={recipeContentWrapperCss}>
            <ul>{displayIngredients()}</ul>
            {displayInstructions()}
          </div>
        </div>
      </div>
      <div>
        {/* {id} */}
        <AddRating thumbsUp={thumbsUp} thumbsDown={thumbsDown} id={id} />
        {/* {thumbsUp} */}
        {/* {thumbsDown} */}
        <Favorite favorite={favorite} />
        {/* {favorite} */}
      </div>
      <Footer />
    </div>
  )
}
