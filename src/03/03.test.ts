import {StudentType} from "../02/02";
import {addSkill, changeActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Andre',
        age: 40,
        isActive: false,
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
})

test('new tech skill should be added to student', () => {

    expect(student.technologies.length).toBe(3)
    addSkill(student, "CSS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("CSS")
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {

    expect(student.isActive).toBe(false)
    changeActive(student)

    expect(student.isActive).toBe(true)
})