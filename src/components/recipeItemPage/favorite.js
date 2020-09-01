import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const heartIconCss = css`
  &[faved='true'] {
    color: red;
  }
`

export default function Favorite(props) {
  const [boolFavortie, setBoolFavorite] = useState(false)
  const [favAttribute, setFavAttribute] = useState('false')
  const { id, favorite } = props

  useEffect(() => {
    if (favorite === 'false') {
      setBoolFavorite(false)
    }
    if (favorite === 'true') {
      setBoolFavorite(true)
    }
  }, [favorite])

  useEffect(() => {
    if (boolFavortie) {
      setFavAttribute('true')
    } else {
      setFavAttribute('false')
    }
  }, [boolFavortie])

  function flipFavorite() {
    if (boolFavortie) {
      setBoolFavorite(false)
      axios.patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/updatefav/${id}`, {
        favorite: 'false',
      })
    } else {
      setBoolFavorite(true)
      axios.patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/updatefav/${id}`, {
        favorite: 'true',
      })
    }
  }

  return (
    <div>
      {boolFavortie && (
        <button type="button" onClick={() => flipFavorite()}>
          Remove From Favorites
        </button>
      )}
      {!boolFavortie && (
        <button type="button" onClick={() => flipFavorite()}>
          Make Me a Favorite!
        </button>
      )}
      <FontAwesomeIcon css={heartIconCss} faved={favAttribute} icon="heart" />
    </div>
  )
}
