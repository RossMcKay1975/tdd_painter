const assert = require('assert')
const Room = require('../room')


describe('Room', function (){

it('should have an area in square meters', function() {
  const room = new Room(10)
  const actual = room.area
  assert.strictEqual(actual, 10)
})

it('should start not painted', function() {
  const room = new Room(10)
  const actual = room.painted
  assert.deepStrictEqual(actual, false)
} )

it('should be able to be painted', function(){
  const room = new Room(15)
  room.paintRoom()
  const actual = room.painted
  assert.strictEqual(actual, true)
})

})
