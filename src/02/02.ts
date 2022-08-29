type TechnologiesType = {
    id: number,
    title: string
}
type LocalCityType = {
        title: string
        countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Andre',
    age: 40,
    isActive: true,
    address: {
        streetTitle: "JohnWayneSt",
        city: {
            title: "Texas",
            countryTitle: "USA"
        }
    },
    technologies: [
        {
            id: 1,
            title: 'React'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'HTML'
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)






