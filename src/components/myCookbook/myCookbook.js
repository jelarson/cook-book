import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'

import Navbar from '../navbar/navbar'
import FilterBar from '../filterBar/filterBar'
import Footer from '../footer/footer'
import RecipeCard from '../recipeCard/recipeCard'

const myCookbookPageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const myCookbookContentWrapperCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`

export default function MyCookbook() {
  const [recipeArr, setRecipeArr] = useState([])

  useEffect(() => {
    axios
      .get(`https://jel-family-cookbook-db.herokuapp.com/recipes`)
      .then((response) => {
        setRecipeArr(response.data)
      })
      .catch((err) => console.log('get error', err))
  }, [])

  function generateCards() {
    return recipeArr.map((recipe) => {
      if (recipe.favorite === 'true') {
        return (
          <RecipeCard
            name={recipe.name}
            category={recipe.category}
            image={recipe.recipeImage}
            id={recipe.id}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            thumbsUp={recipe.thumbsUp}
            thumbsDown={recipe.thumbsDown}
            favorite={recipe.favorite}
          />
        )
      }
    })
  }

  return (
    <div css={myCookbookPageWrapperCss}>
      <Navbar />
      <FilterBar />
      <div css={myCookbookContentWrapperCss}>{generateCards()}</div>
      <Footer />
    </div>
  )
}
