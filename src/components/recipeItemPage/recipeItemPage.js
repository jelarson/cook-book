import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function RecipeItemPage(props) {
  const { location } = props
  const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = location.state

  return (
    <div>
      <Navbar />
      <div>
        {name}
        {category}
        {image}
        {id}
        {ingredients}
        {instructions}
        {thumbsUp}
        {thumbsDown}
        {favorite}
      </div>
      <Footer />
    </div>
  )
}
