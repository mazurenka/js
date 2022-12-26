type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType = {}

beforeEach(() => {
    users = {
        '0': {id: 101, name: 'Dimych'},
        '1': {id: 3232312, name: 'Natasha'},
        '2': {id: 1212, name: 'Valera'},
        '3': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {

    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina')
})

test('should be deleted corresponding user', () => {

    delete users['1']

    expect(users['1']).toBeUndefined()
})