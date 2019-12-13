const sort = (stack) => {
  const storage = []

  while(stack.length) {
    const temp = stack.pop()

    while(storage.length && storage[storage.length - 1] > temp) {
      stack.push(storage.pop())
    }
    storage.push(temp)
  }

  while(storage.length) {
    stack.push(storage.pop())
  }
}

const stack = [5, 6, 4, 7, 8, 10, 11, 9]
sort(stack)

console.log(stack)