import React, { Component } from 'react'

export default class Uploader extends Component {

  onBeginUploadingFile() {
    this.props.beginUploadingFile('/path/to/file')
  }

  render() {
    return (
      <div onClick={() => { this.onBeginUploadingFile() }}>
        Uploader status {this.props.status} {this.props.completion}
      </div>
    )
  }
}
