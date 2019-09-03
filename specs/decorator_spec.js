const assert = require('assert')
const Decorator = require('../decorator')
const Paint = require('../paint')


describe('Decorator', function() {


  it('should start with an empty paint stock', function(){
    const decorator = new Decorator
    const actual = decorator.paintStock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add a can of paint to stock', function() {
    // the constructors we will use
    const decorator = new Decorator
    const paint = new Paint(10)
    // prototype to add paint to stock
    decorator.addToStock(paint)
    // act to return the actual data from our constructors
    const actual = decorator.paintStock
    // assert to make sure the stock is updated
    assert.deepStrictEqual(actual, [paint])
  })

  it('shoud be able to calculate total litres of paint in stock', function() {
    const decorator = new Decorator
    const paint = new Paint(20)
    const paint2 = new Paint(15)
    decorator.addToStock(paint)
    decorator.addToStock(paint2)
    const actual = decorator.stockInLitres()
    assert.strictEqual(actual, 35)

  })


})
