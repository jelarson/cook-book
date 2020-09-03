import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const starRatingScoreCss = css`
  text-align: center;
`

const starIconCss = css`
  color: gold;
  margin-left: 3px;
`

export default function CardRating(props) {
  const { thumbsUp, thumbsDown } = props

  function calcRating(up, down) {
    if (down > 0) {
      return Math.round((up / down) * 100) / 100
    }
    return 'No Rating Yet'
  }
  return (
    <div css={starRatingScoreCss}>
      {calcRating(Number(thumbsUp), Number(thumbsDown))}
      <FontAwesomeIcon css={starIconCss} icon="star" />
    </div>
  )
}
