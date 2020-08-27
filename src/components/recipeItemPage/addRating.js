import React, { useState } from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const starRatingScoreCss = css`
  text-align: center;
`

const starIconCss = css`
  color: gold;
  margin-left: 3px;
`

const starblockCss = css`
  display: flex;
`

const starInvisible = css`
  display: none;
`

export default function AddRating(props) {
  const [starOneVisible, setStarOneVisible] = useState(true)

  const { thumbsUp, thumbsDown, id } = props

  function calcRating(up, down) {
    if (down > 0) {
      return up / down
    }
    return 'No Rating Yet'
  }
  return (
    <div css={starRatingScoreCss}>
      {calcRating(Number(thumbsUp), Number(thumbsDown))}
      <FontAwesomeIcon css={starIconCss} icon="star" />
      <div css={starblockCss}>
        <FontAwesomeIcon css={starIconCss} icon="star" />
        <FontAwesomeIcon css={starIconCss} icon="star-half-alt" />
        <FontAwesomeIcon css={starIconCss} icon="star" />
        <FontAwesomeIcon css={starIconCss} icon="star-half-alt" />
        <FontAwesomeIcon css={starIconCss} icon="star" />
        <FontAwesomeIcon css={starIconCss} icon="star-half-alt" />
        <FontAwesomeIcon css={starIconCss} icon="star" />
        <FontAwesomeIcon css={starIconCss} icon="star-half-alt" />
        <FontAwesomeIcon css={starIconCss} icon="star" />
        <FontAwesomeIcon css={starIconCss} icon="star-half-alt" />
      </div>
      <FontAwesomeIcon icon="star-half" />
      <FontAwesomeIcon icon="star-half-alt" />
    </div>
  )
}
