import {student, StudentType} from "../02/02";

debugger
export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

const res = sum(2, 3)
const res1 = sum(sum(1, 2), sum(2, 4))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const changeActive = (student: StudentType) => {
    student.isActive = true
}


