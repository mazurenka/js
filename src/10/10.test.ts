import {UserType} from "./10";

function hairdresser(u: UserType, power: number) {
    const userCopy = {
        ...u
    }
    userCopy.hair = u.hair / power
    return userCopy
}

test("reference type test", () => {
    let user: UserType = {
        name: "Andre",
        hair: 45,
        address: {
            title: "NY"
        }
    }

    const cutUser = hairdresser(user, 2)

    expect(user.hair).toBe(45)
    expect(cutUser.hair).toBe(22.5)
})