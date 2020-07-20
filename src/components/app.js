import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import Home from './home/home'
import AllRecipes from './allRecipes/allRecipes'
import MyCookbook from './myCookbook/myCookbook'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
            }
          `}
        />
        <div className="app-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mycookbook" component={MyCookbook} />
            <Route exact path="/allrecipes" component={AllRecipes} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
