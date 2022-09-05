/*
Write a function that when a number is passed:
  - Shows "fizz" if the number is multiple of 3
  - Shows "buzz" if the number is multiple of 5
  - Shows "fizzbuzz" if the number is multiple of 3 and 5
  - Shows the number if it is not multiple of any of the previous
*/

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  // if (number % 15 === 0) return 'fizzbuzz'
  // if (number % 3 === 0) return 'fizz'
  // if (number % 5 === 0) return 'buzz'

  return output === '' ? number : output
}
