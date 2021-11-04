class Polygon {
  constructor(array){
    this.array = array;
  }
  get countSides(){
  return  this.array.length;
  }
  get perimeter(){
    return this.array.reduce(function(total, num){return total + num });
  }}
  class Triangle extends Polygon {
    //inherits constructor from polygon
    get isValid(){
      if(this.array === 3){
        return true
      }
    }
  }
