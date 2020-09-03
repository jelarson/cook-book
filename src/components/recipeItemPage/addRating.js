/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import { css } from '@emotion/core'
import axios from 'axios'
import CardRating from '../recipeCard/cardRating'

const ratingWrapperCss = css`
  display: flex;
`

const starWrapperCss = css`
  width: 25px;
  height: 25px;
  position: relative;
  background-repeat: no-repeat;
  cursor: pointer;

  &[star-type="filled"] {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24px' height='24px' xml:space='preserve' role='img'%3E%3Ctitle%3Estar%3C/title%3E%3Cpath d='m22.728 10.418c0.18713-0.14747 0.27874-0.39829 0.21004-0.6424-0.068708-0.24355-0.27595-0.41057-0.51224-0.43962 0.039102 0.0033516-7.1468-0.79713-7.1468-0.79713s-2.7143-6.7016-2.7003-6.6647c-0.09217-0.21953-0.30891-0.37427-0.5614-0.37427-0.25361 0-0.4709 0.15529-0.56252 0.37594h-5.586e-4l-2.7327 6.663s-7.1859 0.80048-7.1468 0.79713c-0.23629 0.029047-0.44409 0.19607-0.51224 0.43962-0.068708 0.24411 0.022344 0.49492 0.21004 0.6424l-5.586e-4 5.586e-4 5.6754 4.4325c-0.005586 0.017875-2.145 6.9027-2.1328 6.8658-0.067591 0.22847 0.0016758 0.48487 0.19775 0.64519 0.19607 0.16088 0.46253 0.1782 0.67312 0.065915h5.586e-4l6.3145-3.4131 6.3145 3.4131 5.587e-4 -5.586e-4c0.21059 0.11284 0.47705 0.095521 0.67312-0.065357 0.19551-0.16032 0.26534-0.41728 0.19719-0.64519h5.586e-4c0.012289 0.036868-2.1283-6.8513-2.1333-6.8664l5.6749-4.432v-5.586e-4z' fill='%23ffb600'/%3E%3C/svg%3E%0A")  };
  &[star-type="half"] {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24px' height='24px' xml:space='preserve' role='img'%3E%3Ctitle%3Ehalf star%3C/title%3E%3Cpath d='m22.938 9.7752c-0.06815-0.24355-0.27539-0.41057-0.51168-0.43962 0.038544 0.0033516-7.1474-0.79713-7.1474-0.79713s-2.7137-6.7016-2.6997-6.6647h-5.586e-4c-0.091611-0.21953-0.30835-0.37427-0.5614-0.37427-0.16907 0-0.35676 0.12531-0.56307 0.37594l0.54687 17.139 6.3145 3.4131c0.21115 0.11228 0.47705 0.094963 0.67368-0.065915 0.19551-0.16032 0.26478-0.41728 0.19719-0.64519 0.012289 0.036868-2.1277-6.8513-2.1328-6.8664l5.6749-4.432c0.18713-0.14803 0.27819-0.39884 0.20948-0.64295z' fill='%23dcdce6'/%3E%3Cpath d='m12.001 1.5006c-0.24582 0.0067041-0.45532 0.1581-0.54527 0.37319h-0.0011173l-2.7325 6.6644s-7.1868 0.80058-7.1482 0.79667c-0.23576 0.02961-0.44359 0.19609-0.51175 0.43968-0.068717 0.2447 0.021788 0.49499 0.2095 0.64303v5.587e-4l5.6761 4.4331c-0.0055868 0.017319-2.1459 6.9035-2.133 6.8667-0.068158 0.22794 0.001676 0.48493 0.19721 0.64527 0.19665 0.16034 0.46258 0.17822 0.6732 0.064806l5.5868e-4 5.586e-4 6.3153-3.4129v-17.515z' fill='%23ffb600'/%3E%3C/svg%3E%0A")  };
  &[star-type="empty"] {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24px' height='24px' xml:space='preserve' role='img'%3E%3Ctitle%3Estar%3C/title%3E%3Cpath d='m22.728 10.418c0.18713-0.14747 0.27874-0.39829 0.21004-0.6424-0.068708-0.24355-0.27595-0.41057-0.51224-0.43962 0.039102 0.0033516-7.1468-0.79713-7.1468-0.79713s-2.7143-6.7016-2.7003-6.6647c-0.09217-0.21953-0.30891-0.37427-0.5614-0.37427-0.25361 0-0.4709 0.15529-0.56252 0.37594h-5.586e-4l-2.7327 6.663s-7.1859 0.80048-7.1468 0.79713c-0.23629 0.029047-0.44409 0.19607-0.51224 0.43962-0.068708 0.24411 0.022344 0.49492 0.21004 0.6424l-5.586e-4 5.586e-4 5.6754 4.4325c-0.005586 0.017875-2.145 6.9027-2.1328 6.8658-0.067591 0.22847 0.0016758 0.48487 0.19775 0.64519 0.19607 0.16088 0.46253 0.1782 0.67312 0.065915h5.586e-4l6.3145-3.4131 6.3145 3.4131 5.587e-4 -5.586e-4c0.21059 0.11284 0.47705 0.095521 0.67312-0.065357 0.19551-0.16032 0.26534-0.41728 0.19719-0.64519h5.586e-4c0.012289 0.036868-2.1283-6.8513-2.1333-6.8664l5.6749-4.432v-5.586e-4z' fill='%23E3E3E6'/%3E%3C/svg%3E%0A")
  }  };

  span {
    :nth-child(2){
      right: 0;
    }
    width: 50%;
    height: 100%;
    position: absolute;
  }
`
export default function AddRating(props) {
  const { thumbsUp, thumbsDown, id } = props
  const [rating, setRating] = useState(0)
  const [canVote, setCanVote] = useState(true)
  const [voteTotal, setVoteTotal] = useState(thumbsDown)
  const [voteSumTotal, setVoteSumTotal] = useState(thumbsUp)

  const typeDecider = (star, halfPoint) => {
    if (rating === halfPoint) return 'half'
    return rating >= star ? 'filled' : 'empty'
  }

  function handleVote() {
    setCanVote(false)
    axios
      .patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/updaterating/${id}`, {
        thumbsUp: String(Number(thumbsUp) + rating),
        thumbsDown: String(Number(thumbsDown) + 1),
      })
      .then(() => {
        setVoteSumTotal(String(Number(thumbsUp) + rating))
        setVoteTotal(String(Number(thumbsDown) + 1))
      })
  }

  function handleVoteChange() {
    setCanVote(true)
    axios
      .patch(`https://jel-family-cookbook-db.herokuapp.com/recipe/updaterating/${id}`, {
        thumbsUp: String(Number(thumbsUp) - rating),
        thumbsDown: String(Number(thumbsDown) - 1),
      })
      .then(() => {
        setVoteSumTotal(String(Number(thumbsUp) - rating))
        setVoteTotal(String(Number(thumbsDown) - 1))
      })
  }

  return (
    <div css={ratingWrapperCss}>
      <div star-type={typeDecider(1, 0.5)} css={starWrapperCss}>
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(0.5)
            }
          }}
          onClick={() => handleVote()}
        />
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(1)
            }
          }}
          onClick={() => handleVote()}
        />
      </div>
      <div star-type={typeDecider(2, 1.5)} css={starWrapperCss}>
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(1.5)
            }
          }}
          onClick={() => handleVote()}
        />
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(2)
            }
          }}
          onClick={() => handleVote()}
        />
      </div>
      <div star-type={typeDecider(3, 2.5)} css={starWrapperCss}>
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(2.5)
            }
          }}
          onClick={() => handleVote()}
        />
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(3)
            }
          }}
          onClick={() => handleVote()}
        />
      </div>
      <div star-type={typeDecider(4, 3.5)} css={starWrapperCss}>
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(3.5)
            }
          }}
          onClick={() => handleVote()}
        />
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(4)
            }
          }}
          onClick={() => handleVote()}
        />
      </div>
      <div star-type={typeDecider(5, 4.5)} css={starWrapperCss}>
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(4.5)
            }
          }}
          onClick={() => handleVote()}
        />
        <span
          onMouseOver={() => {
            if (canVote) {
              setRating(5)
            }
          }}
          onClick={() => handleVote()}
        />
      </div>
      {!canVote && (
        <div>
          <div>You&apos;ve rated this recipe a {rating} out of 5____</div>
          <button type="button" onClick={() => handleVoteChange()}>
            Change rating?
          </button>
        </div>
      )}
      {!voteTotal && (
        <div>
          <CardRating thumbsUp={thumbsUp} thumbsDown={thumbsDown} />
        </div>
      )}
      {voteTotal && (
        <div>
          <CardRating thumbsUp={voteSumTotal} thumbsDown={voteTotal} />
        </div>
      )}
    </div>
  )
}

// localStorage.setItem('key', 'value')
// localStorage.getItem('key')

// localStorage.setItem('voted', JSON.stringify({id: '19', score: '2'}))
// JSON.parse(localStorage.getItem('voted'))
