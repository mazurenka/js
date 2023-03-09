type UserType = {
    name: string
    age: number
}

function incraseAge(u: UserType) {
    u.age++ //u.age = u.age + 1
}

test('reference type test', () => {

    let user = {
        name: "Andre",
        age: 15
    }

    incraseAge(user)

    expect(user.age).toBe(16)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {

    let users = [
        {
            name: "Andre",
            age: 15
        },
        {
            name: "Igor",
            age: 11
        }
    ]

    let admins = users

    admins.push({name: "Sarah", age: 19})

    expect(users[2]).toEqual({name: "Sarah", age: 19})
})
