
type LessonsType = {
    title: number
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Andre',
        age: 40,
        lessons: [{title: 1}, {title: 2}],
        address: {
            street: {
                title: 'New York st'
            }
        }
    }
})

test('', () => {

    let props = {
        name: 'Andre',
        age: 40,
        lessons: [{title: 1}, {title: 2}],
    }

    //let age = props.age
    //let lessons = props.lessons
    let {age, lessons} = props

    /*let a = props.age
    let l = props.lessons*/

    expect(age).toBe(40)
    expect(lessons.length).toBe(2)
    /*expect(a).toBe(40)*/
    /*expect(l.length).toBe(2)*/
})