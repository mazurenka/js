import {cheapPredicate} from "./04";

test('should be older than 90', () => {

    const ages = [14, 3, 90, 84, 1, 100, 29];

    //const predicate = (ages: number) => ages > 90


    const oldAges = ages.filter(ages => ages > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should be minimal prise over 160', () => {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ]

    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].price).toBe(150)
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, task: 'Bread', isDone: false},
        {id: 2, task: 'Milk', isDone: true},
        {id: 3, task: 'Salt', isDone: false},
        {id: 4, task: 'Beer', isDone: true},
    ]

    const completedTasks = tasks.filter((tasks) => tasks.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[0].task).toBe('Milk')
    expect(completedTasks[1].id).toBe(4)
    expect(completedTasks[1].task).toBe('Beer')
})