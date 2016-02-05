import * as WebUtils from '../webUtils/uploader'
import store from '../store'

function onProgress(completion) {
  store.uploader.completion = completion
}

export function beginUploadingFile(path) {
  store.uploader.status = 'UPLOADING'

  WebUtils.upload(path, onProgress.bind(this)).then((item) => {
    store.uploader.status = 'EMPTY'
    store.uploader.completion = 0
    store.items = {
      ...store.items,
      [item.id]: item,
    }
  })
}
