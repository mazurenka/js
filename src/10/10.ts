export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    //userCopy.hair = u.hair / power
    return userCopy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    //userCopy.address = {...userCopy.address, city: city}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    const copy = {
        ...u,
        books: [...u.books]
    }

    copy.books.push(newBook)

    return copy
}