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

export default function CardImage(props) {
  const { thumbsUp, thumbsDown } = props
  return (
    <div css={starRatingScoreCss}>
      {Number(thumbsUp) / Number(thumbsDown)}
      <FontAwesomeIcon css={starIconCss} icon="star" />
    </div>
  )
}
