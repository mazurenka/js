type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'John Snow', age: 33},
    {name: 'Michael Scoufield', age: 24},
    {name: 'Leon Kennedy', age: 19},
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html, js, tdd, react"],
        firstName: man.name.split(" "[0]),
        lastName: man.name.split(" "[1])
    }
}

const devs1 = [
    {
        stack: ["css, html, js, tdd, react"],
        firstName: "John", lastName: "Snow"
    },
    {
        stack: ["css, html, js, tdd, react"],
        firstName: "Michael", lastName: "Scoufield"
    },
    {
        stack: ["css, html, js, tdd, react"],
        firstName: "Leon", lastName: "Kennedy"
    },
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const devs2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ["css, html, js, tdd, react"],
    firstName: man.name.split(" "[0]),
    lastName: man.name.split(" "[1])
}))

