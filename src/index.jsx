import React from 'react'
import { render } from 'react-dom'

import Cart from './components/Cart'

import { observable } from 'mobservable'

var store = observable({
  counter: 1,
  other: 'stuff',
  even: 'more',
})

document.addEventListener('DOMContentLoaded', () => {
  render( <Cart store={store} />, document.getElementById('app') )
})
