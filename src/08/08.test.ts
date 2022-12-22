beforeEach( () => {

} )

test('should select corresponding user from obj', () => {
    expect(userObj[0]).toBe('Dimych')
    expect(userObj[1]).toBe('Natasha')
    expect(userObj[2]).toBe('Valera')
    expect(userObj[3]).toBe('Katya')
})