import React, { Component } from 'react'
import { connect } from 'react-redux'

function props(store) {
  return {}
}

function actions(dispatch) {
  return {
    changeItemAmount: (id, amount) => {
      dispatch({
        type: 'CHANGE_ITEM_AMOUNT',
        payload: { id, amount }
      })
    },

    deleteItem: (id) => {
      dispatch({
        type: 'DELETE_ITEM',
        payload: { id }
      })
    }
  }
}

class Item extends Component {

  onChangeItemAmount() {
    this.props.changeItemAmount(this.props.id, this.props.amount + 1)
  }

  onDeleteItem() {
    this.props.deleteItem(this.props.id)
  }

  render() {
    return (
      <div>
        <li onClick={() => { this.onChangeItemAmount() }}>
          {this.props.name} {this.props.amount}
        </li>

        <a href="#" onClick={() => { this.onDeleteItem() }}>Delete</a>
      </div>
    )
  }
}

export default connect(props, actions)(Item)
