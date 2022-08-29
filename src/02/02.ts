const name1 = 'yo';
const age = 12;
const isStudent = true

const student = {
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






