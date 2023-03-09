type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

function incraseAge(user: UserType) {
    user.age++ //u.age = u.age + 1
}

test('reference type test', () => {

    let user = {
        name: "Andre",
        age: 15,
        address: {
            title: "NY"
        }
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

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount + 1 //adminsCount++ //++adminsCount

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('reference 2 type test', () => {

    let user = {
        name: "Andre",
        age: 15,
        address: {
            title: "NY"
        }
    }

    //let addr = user.address

    let user2 = {
        name: "Jane",
        age: 25,
        address: user.address
    }

    user2.address.title = "Florida"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Florida")
})
