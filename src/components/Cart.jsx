import React, { Component, PropTypes } from 'react'
import { observer } from 'mobservable-react'

import UploaderController from './UploaderController'
import ItemsController from './ItemsController'

class Cart extends Component {

  render() {
    return (
      <section>
        <UploaderController />
        <ItemsController />
      </section>
    )
  }
}

export default Cart
