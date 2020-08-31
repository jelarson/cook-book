import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

// import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import CardRating from './cardRating'
import CardImage from './cardImage'
import CardBottomButton from './cardBottomButton'

const cardWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 4px solid black;
  width: 20vw;
  height: 400px;
  margin-top: 30px;
  border-radius: 15px;
`
const cardWrapperHiddenCss = css`
  display: none;
`

const cardHeadWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const cardTitleCss = css`
  text-align: center;
  font-weight: 900;
`
const cardCategoryCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-bottom: 4px solid black;
  text-align: center;
`

const iconWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  width: 96%;
  margin-top: 3px;
`
const deleteIconCss = css`
  cursor: pointer;

  &:hover {
    font-size: 1.4em;
  }
`

const iconButtonFavCss = css`
  cursor: pointer;
  color: red;

  &:hover {
    font-size: 1.4em;
  }
`
const iconButtonNoFavCss = css`
  cursor: pointer;
  color: black;

  &:hover {
    font-size: 1.4em;
  }
`

const iconButtonContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
`

export default function RecipeCard(props) {
  const { name, category, image, id, ingredients, instructions, thumbsUp, thumbsDown, favorite } = props
  const [iconStyleCss, setIconStyleCss] = useState(iconButtonNoFavCss)
  const [cardDisplay, setCardDisplay] = useState(cardWrapperCss)

  useEffect(() => {
    if (favorite === 'true') {
      setIconStyleCss(iconButtonFavCss)
    }
    if (favorite === 'false') {
      setIconStyleCss(iconButtonNoFavCss)
    }
  }, [favorite])

  function deleteClickHandler() {
    setCardDisplay(cardWrapperHiddenCss)
    axios.delete(`https://jel-family-cookbook-db.herokuapp.com/recipe/${id}`)
  }

  function favClickHandler() {
    if (iconStyleCss === iconButtonFavCss) {
      setIconStyleCss(iconButtonNoFavCss)
      axios.patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/${id}`, {
        name,
        category,
        recipeImage: image,
        ingredients,
        instructions,
        thumbsUp,
        thumbsDown,
        favorite: 'false',
      })
    } else {
      setIconStyleCss(iconButtonFavCss)
      axios.patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/${id}`, {
        name,
        category,
        recipeImage: image,
        ingredients,
        instructions,
        thumbsUp,
        thumbsDown,
        favorite: 'true',
      })
    }
  }

  return (
    <div css={cardDisplay}>
      <div css={cardHeadWrapperCss}>
        <div css={cardCategoryCss}>{category}</div>
        <div css={iconWrapperCss}>
          <div css={iconButtonContainer}>
            <FontAwesomeIcon css={deleteIconCss} onClick={deleteClickHandler} icon="trash" />
          </div>
          <CardRating thumbsUp={thumbsUp} thumbsDown={thumbsDown} />
          <div css={iconButtonContainer}>
            <FontAwesomeIcon css={iconStyleCss} onClick={favClickHandler} icon="heart" />
          </div>
        </div>
        <div css={cardTitleCss}>{name}</div>
      </div>
      <CardImage image={image} />
      <CardBottomButton
        name={name}
        category={category}
        image={image}
        id={id}
        ingredients={ingredients}
        instructions={instructions}
        thumbsUp={thumbsUp}
        thumbsDown={thumbsDown}
        favorite={favorite}
      />
    </div>
  )
}
