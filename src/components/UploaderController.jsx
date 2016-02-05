import React, { Component, PropTypes } from 'react'
import { observer } from 'mobservable-react'
import { beginUploadingFile } from '../actions/uploader'
import Uploader from './Uploader'
import store from '../store'

class UploaderController extends Component {

  render() {
    const props = {
      beginUploadingFile,
      ...store.uploader,
    }

    return (
      <Uploader {...props} />
    )
  }
}

export default observer(UploaderController)
