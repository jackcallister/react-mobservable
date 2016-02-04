import React, { Component, PropTypes } from 'react'
import { observer } from 'mobservable-react'

class UploaderController extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const props = {
      increment: () => { this.context.store.counter++ },
      counter: this.context.store.counter,
    }

    return (
      <Uploader {...props} />
    )
  }
}

class Uploader extends Component {

  render() {
    return (
      <div onClick={() => { this.props.increment() }}>
        Uploader {this.props.counter}
      </div>
    )
  }
}

export default observer(UploaderController)
