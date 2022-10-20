const ages = [14, 3, 90, 94, 1, 100, 29];

const predicate = (ages: number) => {
    return ages > 90
}

const oldAges = [100]  //ages > 90

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

type coursesType = {
    title: string,
    price: number
}

export const cheapPredicate = (course: coursesType) => course.price < 160

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150},
]