import React, { Component } from 'react'

import ItemController from './ItemController'

export default class Items extends Component {

  renderItems() {
    return this.props.items.map((item) => {
      return <ItemController key={item.id} item={item} />
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
