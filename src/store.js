import { observable } from 'mobservable'

export default observable({
  uploader: {
    status: 'EMPTY',
    completion: 0,
    path: ''
  },
  items: []
})
