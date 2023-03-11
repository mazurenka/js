import {UserType} from "./10";

function makeHairstyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    //userCopy.hair = u.hair / power
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

    const cutUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(45)
    expect(cutUser.hair).toBe(22.5)
})