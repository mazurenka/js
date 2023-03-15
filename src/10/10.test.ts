import {makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10";

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