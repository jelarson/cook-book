import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const cardWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 4px solid black;
  width: 20vw;
  height: 300px;
  margin-top: 30px;
  border-radius: 15px;
  // position: relative;
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
const imageWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 15vw;
  padding: top: 100%;
  border: 2px solid black;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const cardButtonWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 15vw;
    margin-bottom: 7px;
    background-color: black;
    color: white;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
      color: yellow;
    }
  }
`
const iconWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  width: 96%;
  margin-top: 3px;
  // position: absolute;
  // top: 33px;
  // right: 5px;
  // border: 1px black solid;
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
      // .then(() => setIconStyleCss(iconButtonNoFavCss))
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
      // .then(() => setIconStyleCss(iconButtonFavCss))
    }
  }

  return (
    <div css={cardDisplay}>
      <div css={cardHeadWrapperCss}>
        <div css={cardCategoryCss}>{category}</div>
        <div css={iconWrapperCss}>
          <FontAwesomeIcon css={deleteIconCss} onClick={deleteClickHandler} icon="trash" />
          <FontAwesomeIcon css={iconStyleCss} onClick={favClickHandler} icon="heart" />
        </div>
        <div css={cardTitleCss}>{name}</div>
      </div>
      <div css={imageWrapperCss}>
        {/* <div css={imageWrapperCss} style={{ backgroundImage: `url(${image})` }}> */}
        <img src={image} alt="Recipe Hero" />
      </div>
      <div css={cardButtonWrapper}>
        {/* <button type="button"> */}
        {/* </button> */}
        <button type="button">View Recipe</button>
      </div>
    </div>
  )
}
