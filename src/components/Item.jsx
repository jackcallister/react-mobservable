import React, { Component } from 'react'

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
        <div onClick={() => { this.onDeleteItem() }}>Delete</div>
      </div>
    )
  }
}

export default Item
