type UserType = {
    name: string
    age: number
}

function incraseAge(u: UserType) {
    u.age++ //u.age = u.age + 1
}

test('Big test', () => {

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
