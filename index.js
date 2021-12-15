class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total += side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides != 3) {
      return false;
    } else {
      let [a, b, c] = this.sides;
      console.log(a, b, c)
      if (a + b > c && b + c > a && a + c > b) {
        return true;
      } else {
        return false;
      }

    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.perimeter / 4 === this.sides[0]) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }

}
