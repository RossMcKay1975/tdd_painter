const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function() {

it('should have a number of litres of paint', function() {
  const paint = new Paint(10)
  const actual = paint.litres
  assert.strictEqual(actual, 10)
})

it('should be able to check if empty', function(){
  const paint = new Paint(10)
  const actual = paint.empty
  assert.strictEqual(actual, false)
})

it('should be able to empty itself', function() {
  const paint = new Paint(10)
  paint.emptyPaint()
  const actual = paint.empty
  assert.strictEqual(actual, true)
})


})
