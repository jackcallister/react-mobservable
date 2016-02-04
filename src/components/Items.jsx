import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

function props(store) {
  return {
    items: Object.keys(store.items).map( k => store.items[k] )
  }
}

class Items extends Component {

  renderItems() {
    return this.props.items.map((item) => {
      return <Item key={item.id} {...item} />
    })
  }

  render() {
    const items = this.renderItems()

    return (
      <ul>
        {items}
      </ul>
    )
  }
}

export default Items