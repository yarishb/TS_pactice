interface Rect{
    readonly id: string | number,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: 123,
    size:{
        width: 123,
        height: 232
    }
}

rect1.color = "red"

const rect2 = {} as Rect
const rect3 = <Rect>{}

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect4: RectWithArea = {
    id: 123,
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

interface IClock{
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void{
        this.time = date
    }
}

interface Styles{
    [key: string]: string
}

const css: Styles = {
    border: "12121",
    borderTop: "2px",
    marginL: "3px"
}