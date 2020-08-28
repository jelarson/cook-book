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

const starIconRightHalfCss = css`
  color: gold;
  // transform: rotateY(180deg);
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

const starIconRightHalfDarkCss = css`
  color: black;
  // transform: rotateY(180deg);
  margin-left: 3px;
`

const starIconTestCss = css`
  color: black;
  margin-right: -12px;
  border: 1px solid black;

  &:hover {
    color: gold;
  }
`
const starIconTestRightCss = css`
  color: black;
  margin-left: -6px;
  transform: rotateY(180deg);
  border: 1px solid black;

  &:hover {
    color: gold;
  }
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
      setStarOneHalfVisible(false)
      setStarTwoVisible(false)
      setStarTwoHalfVisible(false)
      setStarThreeVisible(false)
      setStarThreeHalfVisible(false)
      setStarFourVisible(false)
      setStarFourHalfVisible(false)
      setStarFiveVisible(false)
      setStarFiveHalfVisible(false)
    }
    if (voteValue === 0.5) {
      setStarOneHalfVisible(true)
    }
    if (voteValue === 1) {
      setStarOneVisible(true)
    }
    if (voteValue === 1.5) {
      setStarOneVisible(true)
      setStarTwoHalfVisible(true)
    }
    if (voteValue === 2) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
    }
    if (voteValue === 2.5) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeHalfVisible(true)
    }
    if (voteValue === 3) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
    }
    if (voteValue === 3.5) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
      setStarFourHalfVisible(true)
    }
    if (voteValue === 4) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
      setStarFourVisible(true)
    }
    if (voteValue === 4.5) {
      setStarOneVisible(true)
      setStarTwoVisible(true)
      setStarThreeVisible(true)
      setStarFourVisible(true)
      setStarFiveHalfVisible(true)
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
        <div>
          <FontAwesomeIcon css={starIconTestCss} icon="star-half" />
        </div>
        {/* <div onMouseEnter={() =>}> */}
        <FontAwesomeIcon css={starIconTestRightCss} icon="star-half" />
        {/* </div> */}
        <FontAwesomeIcon
          css={starOneHalfVisible ? starIconRightHalfCss : starIconRightHalfDarkCss}
          icon="star-half-alt"
          onMouseEnter={() => setVoteValue(0.5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starOneVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(1)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starTwoHalfVisible ? starIconRightHalfCss : starIconRightHalfDarkCss}
          icon="star-half-alt"
          onMouseEnter={() => setVoteValue(1.5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starTwoVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(2)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starThreeHalfVisible ? starIconRightHalfCss : starIconRightHalfDarkCss}
          icon="star-half-alt"
          onMouseEnter={() => setVoteValue(2.5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starThreeVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(3)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starFourHalfVisible ? starIconRightHalfCss : starIconRightHalfDarkCss}
          icon="star-half-alt"
          onMouseEnter={() => setVoteValue(3.5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starFourVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(4)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starFiveHalfVisible ? starIconRightHalfCss : starIconRightHalfDarkCss}
          icon="star-half-alt"
          onMouseEnter={() => setVoteValue(4.5)}
          onMouseLeave={() => setVoteValue(0)}
        />
        <FontAwesomeIcon
          css={starFiveVisible ? starIconCss : starIconDarkCss}
          icon="star"
          onMouseEnter={() => setVoteValue(5)}
          onMouseLeave={() => setVoteValue(0)}
        />
      </div>
      {/* <FontAwesomeIcon icon="star-half" />
      <FontAwesomeIcon icon="star-half-alt" /> */}
    </div>
  )
}
