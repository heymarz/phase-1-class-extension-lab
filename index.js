class Polygon {
  constructor(sides){
    this.sides = sides;
    this.count = this.sides.length
  }
  get countSides(){
  return this.sides.length;
  }
  get perimeter(){
    return this.sides.reduce(function(total, num){return total + num });
  }}

  class Triangle extends Polygon {
    //inherits constructor from polygon
    get isValid(){
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      if(a+b>c && a+c>b && b+c>a){
        return true
      } else {
        return false
      }
    }
  }

  class Square extends Polygon {
    get area(){
      return (this.sides[0] * this.sides[1])
    }
    get isValid() {
      let side1 = this.sides[0];
      let side2 = this.sides[1];
      let side3 = this.sides[2];
      let side4 = this.sides[3];
      if((side1 ==side2)&&(side1 == side3)&& (side1 == side4)){
        return true
      } else {
        return false
      }
    }
  }

