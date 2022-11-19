import divise from "divise"

const minus = (x: number, y: number) => {
    console.log(divise(x, y))
    return x - y
}

console.log(minus(9, 2))

export default minus