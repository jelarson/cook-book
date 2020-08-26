import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Favorite(props) {
  const { favorite } = props

  function generateFavoriteButton() {
    if (favorite === 'false') {
      return <button type="button">Make Me a Favorite!</button>
    }
    return <button type="button">Remove from Favorites</button>
  }

  return <div>{generateFavoriteButton()}</div>
}
