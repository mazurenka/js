import {
    addNewBooksToUser, changeBookToUser, deleteBookOnUser,
    makeHairstyle,
    moveUser, updateTitleCompanyToUser,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from "./10";

test("reference type test", () => {
    let user: UserType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 10
        }
    }

    const cutUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(45)
    expect(cutUser.hair).toBe(22.5)
    expect(cutUser.address).toBe(user.address)
})

test("change address test", () => {
    let user: UserWithLaptopType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        }
    }

    const movedUser = moveUser(user, "Florida")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Florida")
    expect(movedUser.laptop).toBe(user.laptop)
})

test("update laptop to macBook test", () => {
    let user: UserWithLaptopType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        }
    }

    const upgradedUser = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe("Macbook")
    expect(upgradedUser.address).toBe(user.address)
})

test("add new books to user test", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        },
        books: ["css", "html", "js", "react"]
    }

    const upgradedUser = addNewBooksToUser(user, "ts")

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(upgradedUser.address).toBe(user.address)
    expect(upgradedUser.books).not.toBe(user.books)
    expect(upgradedUser.books.length).toBe(5)
    expect(user.books.length).toBe(4)
})

test("change book to user test", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        },
        books: ["css", "html", "js", "react"]
    }

    const upgradedUser = changeBookToUser(user, "js", "ts")

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(upgradedUser.address).toBe(user.address)
    expect(upgradedUser.books).not.toBe(user.books)
    expect(upgradedUser.books.length).toBe(4)
    expect(upgradedUser.books[2]).toBe("ts")
    expect(user.books[2]).toBe("js")
})

test("delete html book on user test", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        },
        books: ["css", "html", "js", "react"]
    }

    const upgradedUser = deleteBookOnUser(user, "html")

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(upgradedUser.address).toBe(user.address)
    expect(upgradedUser.books).not.toBe(user.books)
    expect(upgradedUser.books.length).toBe(3)
    expect(user.books.length).toBe(4)
})

test("update EvilCorp company to user test", () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: "Andre",
        hair: 45,
        address: {
            city: "NY",
            house: 15
        },
        laptop: {
            title: "ASUS Rog"
        },
        companies: [{id: 1, title: "Google"}, {id: 2, title: "Apple"}]
    }

    const upgradedUser = updateTitleCompanyToUser(user, 1, 'EvilCorp') as UserWithLaptopType & WithCompanyType

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(upgradedUser.address).toBe(user.address)
    expect(upgradedUser.companies).not.toBe(user.companies)
    expect(upgradedUser.companies.length).toBe(2)
    expect(upgradedUser.companies[0].title).toBe("EvilCorp")
})