export function upload(path, onProgress) {
  let completion = 0

  return new Promise((resolve, reject) => {

    const interval = setInterval(() => {
      completion = completion + 10
      onProgress(completion)
    }, 200)

    setTimeout(() => {
      clearInterval(interval)
      resolve({
        id: Date.now(),
        name: 'Jack',
        amount: 1,
      })
    }, 2000)
  })
}
