import React, { Component } from 'react'

import { observer } from 'mobservable-react'

import Uploader from './Uploader'
// import Items from './Items'

class Cart extends Component {

  static childContextTypes = {
    store: React.PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <section>
        <button onClick={() => { this.props.store.counter++ }}>Increment</button>
        <Uploader />
      </section>
    )
  }
}

export default observer(Cart)