import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import FilterBar from '../filterBar/filterBar'
import RecipeCard from '../recipeCard/recipeCard'

const allRecipePageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const allRecipeContentWrapperCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`

export default function AllRecipes() {
  const [recipeArr, setRecipeArr] = useState([])

  useEffect(() => {
    axios
      .get(`https://jel-family-cookbook-db.herokuapp.com/recipes`)
      .then((response) => setRecipeArr(response.data))
      .catch((err) => console.log('get error', err))
  }, [])

  function generateCards() {
    return recipeArr.map((recipe) => {
      return <RecipeCard recipeObj={recipe} />
    })
  }

  return (
    <div css={allRecipePageWrapperCss}>
      <Navbar />
      <FilterBar />
      <div css={allRecipeContentWrapperCss}>{generateCards()}</div>
    </div>
  )
}
