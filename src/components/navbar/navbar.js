import React from 'react'
import { css } from '@emotion/core'

import NavbarButton from './navbarButton'

const navbarWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
`
const navbarTitleCss = css`
  font-size: 1.3em;
  margin-top: 10px;
`

const navbarLinksWrapperCss = css`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
`
// const navbarLinkDivCss = css`
//   width: 33%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const navbarLinkCss = css`
//   // padding: 4px;
//   width: 120px;
//   height: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   background-color: white;
//   color: black;
//   text-decoration: none;

//   &:hover {
//     background-color: black;
//     color: white;
//   }
// `

export default function Navbar() {
  return (
    <div css={navbarWrapperCss}>
      <div css={navbarTitleCss}>Create Your Own Cookbook</div>
      <div css={navbarLinksWrapperCss}>
        {/* <div css={navbarLinkDivCss}>
          <a href="google.com" css={navbarLinkCss}>
            My Cookbook
          </a>
        </div>
        <div css={navbarLinkDivCss}>
          <a href="google.com" css={navbarLinkCss}>
            All Recipes
          </a>
        </div>
        <div css={navbarLinkDivCss}>
          <a href="google.com" css={navbarLinkCss}>
            Add a Recipe
          </a>
        </div> */}
        <NavbarButton path="google.com" buttonText="My Cookbook" />
        <NavbarButton path="google.com" buttonText="All Recipes" />
        <NavbarButton path="google.com" buttonText="Add a Recipe" />
      </div>
    </div>
  )
}
