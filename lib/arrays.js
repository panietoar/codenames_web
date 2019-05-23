export function randomElements(array, elements) {
  const result = new Array(elements)
  let length = array.length
  const taken = new Array(length)
  if (elements > length) {
    throw new RangeError('getRandom: more elements taken than available')
  }
  while (elements--) {
    const x = Math.floor(Math.random() * length)
    result[elements] = array[x in taken ? taken[x] : x]
    taken[x] = --length in taken ? taken[length] : length
  }
  return result
}
