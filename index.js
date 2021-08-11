class Polygon {
    constructor(integers){
    this.integers = integers
    }

    get countSides() {
       return this.integers.length
    }

    get perimeter() {
        let sum = (this.integers).reduce(function(a, b) {return a + b}, 0)
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.integers[0]+this.integers[1]) <= this.integers[2] || (this.integers[1]+this.integers[2]) <= this.integers[0] || (this.integers[0]+this.integers[2]) <= this.integers[1]){
        return false 
            }
        else {
            return true
            }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.integers[0] === this.integers[1]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        let area = this.integers[0] * this.integers[1]
        return area
    }
}

// polygon = new Polygon ([5, 5, 5])
// console.log(polygon.perimeter)