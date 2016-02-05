import React, { Component, PropTypes } from 'react'
import { observer } from 'mobservable-react'
import { changeItemAmount, deleteItem } from '../actions/item'
import Item from './Item'

class ItemController extends Component {

  render() {
    const props = {
      changeItemAmount,
      deleteItem,
      ...this.props.item,
    }

    return (
      <Item {...props} />
    )
  }
}

export default observer(ItemController)
