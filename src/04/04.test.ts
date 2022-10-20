import {cheapPredicate} from "./04";

test('should be older than 90', () => {

    const ages = [14, 3, 90, 84, 1, 100, 29];

    const predicate = (ages: number) => ages > 90


    const oldAges = ages.filter(predicate)

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