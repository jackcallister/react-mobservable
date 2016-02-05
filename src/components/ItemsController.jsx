import React, { Component, PropTypes } from 'react'
import { observer } from 'mobservable-react'
import Items from './Items'
import store from '../store'

class ItemsController extends Component {

  render() {
    const props = {
      items: Object.keys(store.items).map( k => store.items[k] )
    }

    return (
      <Items {...props} />
    )
  }
}

export default observer(ItemsController)
