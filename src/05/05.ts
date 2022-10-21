type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'John Snow', age: 33},
    {name: 'Michael Scoufield', age: 24},
    {name: 'Leon Kennedy', age: 19},
]

const dimychTransformator = (man:ManType) => {
    return {
        stack:  ["css, html, js, tdd, react"],
        firstName: man.name.split(" "[0]),
        lastName: man.name.split(" "[1])
    }
}

const devs = [
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