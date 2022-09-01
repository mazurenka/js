debugger
export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(2, 3)
const res1 = sum(sum(1, 2), sum(2, 4))