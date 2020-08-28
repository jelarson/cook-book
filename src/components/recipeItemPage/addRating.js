import React, { useState, useEffect } from 'react'
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
  cursor: pointer;
`

const starIconDarkCss = css`
  color: black;
  margin-left: 3px;
`

export default function AddRating(props) {
  const [starOneVisible, setStarOneVisible] = useState(false)
  const [starOneHalfVisible, setStarOneHalfVisible] = useState(false)
  const [starTwoVisible, setStarTwoVisible] = useState(false)
  const [starTwoHalfVisible, setStarTwoHalfVisible] = useState(false)
  const [starThreeVisible, setStarThreeVisible] = useState(false)
  const [starThreeHalfVisible, setStarThreeHalfVisible] = useState(false)
  const [starFourVisible, setStarFourVisible] = useState(false)
  const [starFourHalfVisible, setStarFourHalfVisible] = useState(false)
  const [starFiveVisible, setStarFiveVisible] = useState(false)
  const [starFiveHalfVisible, setStarFiveHalfVisible] = useState(false)
  const [voteValue, setVoteValue] = useState(0)

  const { thumbsUp, thumbsDown, id } = props

  useEffect(() => {
    if (voteValue === 0) {
      setStarOneVisible(false)
      setStarTwoVisible(false)
      setStarThreeVisible(false)
      setStarFourVisible(false)
      setStarFiveVisible(false)
    }
    if (voteValue === 1) {
      setStarOneVisible(true)
    }
    if (voteValue === 2) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
    }
    if (voteValue === 3) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
    }
    if (voteValue === 4) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
      setStarFourVisible(true)
    }
    if (voteValue === 5) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
      setStarFourVisible(true)
      setStarFiveVisible(true)
    }
  }, [voteValue])

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
        <FontAwesomeIcon
          css={starOneVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(1)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon css={starOneHalfVisible ? starIconCss : starIconDarkCss} icon="star-half-alt" />
        <FontAwesomeIcon
          css={starTwoVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(2)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon css={starTwoHalfVisible ? starIconCss : starIconDarkCss} icon="star-half-alt" />
        <FontAwesomeIcon
          css={starThreeVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(3)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon css={starThreeHalfVisible ? starIconCss : starIconDarkCss} icon="star-half-alt" />
        <FontAwesomeIcon
          css={starFourVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(4)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon css={starFourHalfVisible ? starIconCss : starIconDarkCss} icon="star-half-alt" />
        <FontAwesomeIcon
          css={starFiveVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon css={starFiveHalfVisible ? starIconCss : starIconDarkCss} icon="star-half-alt" />
      </div>
      {/* <FontAwesomeIcon icon="star-half" />
      <FontAwesomeIcon icon="star-half-alt" /> */}
    </div>
  )
}
