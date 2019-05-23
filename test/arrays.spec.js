import * as arrays from '@/lib/arrays'

describe('arrays', () => {
  describe('randomElements function', () => {
    const array = [1, 2, 3, 4, 5]
    beforeEach(() => {
    })

    test('returns items of array', () => {
      const result = arrays.randomElements(array, 1)[0]
      expect(array.includes(result)).toBeTruthy()
    })

    test('returns given number of items', () => {
      const result = arrays.randomElements(array, 3)
      expect(result.length).toEqual(3)
    })

    test('throws error if given number is greater than array ', () => {
      expect(() => { arrays.randomElements(array, 6) }).toThrow(RangeError)
    })
  })
})
