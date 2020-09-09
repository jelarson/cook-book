/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

import axios from 'axios'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import AddRating from './addRating'
import Favorite from './favorite'
import RecipeComments from './recipeComments'

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
  const { name, category, image, id, ingredients, instructions } = location.state
  const [totalVotes, setTotalVotes] = useState()
  const [totalVotesSum, setTotalVotesSum] = useState()
  const [favorite, setFavorite] = useState('false')
  // const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = location.state
  useEffect(() => {
    axios
      .get(`https://jel-family-cookbook-db.herokuapp.com/recipe/${id}`)
      .then((response) => {
        setTotalVotes(response.data.thumbsDown)
        setTotalVotesSum(response.data.thumbsUp)
        setFavorite(response.data.favorite)
      })
      .catch((error) => {
        console.log('get response error', error)
      })
  }, [id])

  // data asynchronous - setting totalVotes and totalVotesSum before axios call is completed.

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
            <ul>
              {ingredients.split(', ').map((ingredient) => {
                return <li>{ingredient}</li>
              })}
            </ul>
            {instructions.split(', ').map((instruction) => {
              return <div>{instruction}</div>
            })}
          </div>
        </div>
      </div>
      <div>
        <AddRating thumbsUp={totalVotesSum} thumbsDown={totalVotes} id={id} />
        <Favorite id={id} favorite={favorite} />
      </div>
      <RecipeComments />
      <Footer />
    </div>
  )
}
