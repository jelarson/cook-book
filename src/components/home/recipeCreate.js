import React from 'react'
import { css } from '@emotion/core'
import axios from 'axios'

import RecipePreview from './recipePreview'
import CreateForm from './createForm'
import useRecipeStateHook from './recipeStateHook'

const recipeCreateWrapperCss = css`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: 75%;
  align-items: center;
`
const recipeCreateTitleCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  margin-bottom: 12px;
`
const recipeCreateContentWrapperCss = css`
  display: flex;
  // flex-direction: column;
  border-top: 3px black solid;
  width: 100%;
  justify-content: space-between;
  padding-top: 5px;
`

const formButtonWrapperCss = css`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const formButtonCss = css`
  background-color: grey;
  color: white;
  border: black 2px solid;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.3em;

  &:hover {
    background-color: maroon;
    color: white;
  }
`

export default function RecipeCreate() {
  const { recipeState, actions } = useRecipeStateHook()

  function handleClear() {
    actions.clearRecipe()
  }

  function handleSubmit() {
    axios
      .post('https://jel-family-cookbook-db.herokuapp.com/recipe', {
        name: recipeState.title,
        category: recipeState.category,
        recipeImage: recipeState.imageUrl,
        ingredients: recipeState.ingredients.join(', '),
        instructions: recipeState.instructions.join(', '),
        thumbsUp: '0',
        thumbsDown: '0',
        favorite: 'false',
      })
      .then(handleClear())
      .catch((err) => console.log(err), console.log(recipeState.imageUrl.length))
  }

  return (
    <div css={recipeCreateWrapperCss}>
      <div css={recipeCreateTitleCss}>Add Your Own Recipe</div>
      <div css={recipeCreateContentWrapperCss}>
        <CreateForm actions={actions} />
        <RecipePreview recipeState={recipeState} />
      </div>
      <div css={formButtonWrapperCss}>
        <button
          css={formButtonCss}
          type="button"
          onClick={() => {
            handleSubmit()
          }}
        >
          Submit
        </button>
        <button
          css={formButtonCss}
          type="button"
          onClick={() => {
            handleClear()
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  )
}
