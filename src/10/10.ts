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

export type CompanyType = {
    id: number,
    title: string
}

export type WithCompanyType = {
    companies: Array<CompanyType>
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
    return {
        ...u, books: [...u.books, newBook]
    }
}

export const changeBookToUser = (u: UserWithBooksType & UserWithLaptopType,
                                 oldBook: string,
                                 newBook: string) => ({
    ...u, books: u.books.map(b => b === oldBook ? newBook : b)
})

export const deleteBookOnUser = (u: UserWithBooksType & UserWithLaptopType,
                                 deleteBook: string) => ({
    ...u, books: u.books.filter(b => b !== deleteBook)
})

export const updateTitleCompanyToUser = (user: WithCompanyType,
                                         companyId: number,
                                         newTitle: string) => ({
    ...user, companies: user.companies.map(c => c.id === companyId
        ? {...c, title: newTitle}
        : c)
})
/*{
    const copy: WithCompanyType = {
        ...user,
        companies: user.companies.map(c => {
            if (c.id === companyId) {
                return {...c, title: newTitle}
            } else return c
        })
    }
    return copy
}*/

export const updateCompany2 = (companies: { [key: string]: Array<CompanyType> },
                               userName: string,
                               companyId: number,
                               newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle} : c)

    return companyCopy
}