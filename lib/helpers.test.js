import { addItem, findById, toggleItem, removeItem, updateItem } from './helpers';

test('addItem should add the passed todo to the list', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' }
  ]
  const newItem = { id: 3, name: 'three' }
  const expected = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]

  const result = addItem(startItems, newItem)

  expect(result).toEqual(expected)
});

test('addItem should not mutate the existing todo array', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' }
  ]
  const newItem = { id: 3, name: 'three' }
  const expected = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]

  const result = addItem(startItems, newItem)

  expect(result).not.toBe(startItems)

});

test('findById should return the expected item from an array', () => {
  const startItem = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]
  const expected = { id: 2, name: 'two' }
  const result = findById(2, startItem)
  expect(result).toEqual(expected)
});

test('toggleItem should toggle the paidToAffiliate prop of a todo', () => {
  const startItem = { id: 2, name: 'two', paidToAffiliate: false }
  const expected = { id: 2, name: 'two', paidToAffiliate: true }
  const result = toggleItem(startItem)
  expect(result).toEqual(expected)
})

test('toggleItem should not mutate the original item', () => {
  const startItem = { id: 2, name: 'two', paidToAffiliate: false }
  const result = toggleItem(startItem)
  expect(result).not.toBe(startItem)
})

test('updateItem should update an item by id', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]
  const updatedItem = { id: 2, name: 'two' }
  const expectedItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]

  const result = updateItem(startItems, updatedItem)

  expect(result).toEqual(expectedItems)
})

test('updateItem should not mutate the original array', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]
  const updatedItem = { id: 2, name: 'two' }

  const result = updateItem(startItems, updatedItem)

  expect(result).not.toBe(startItems)
})

test('removeItem should remove an item by id', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]
  const targetId = 2
  const expectedItems = [
    { id: 1, name: 'one' },
    { id: 3, name: 'three' }
  ]
  const result = removeItem(startItems, targetId)

  expect(result).toEqual(expectedItems)
})

test('removeItem should not mutate the original array', () => {
  const startItems = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ]
  const targetId = 2
  const result = removeItem(startItems, targetId)

  expect(result).not.toBe(startItems)
})
