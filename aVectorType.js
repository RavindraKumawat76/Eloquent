class  Vector{
 constructor(x ,y){
  this.x = x;
  this.y = y;
 }
 plus(another) {
  return new Vector(this.x + another.x, this.y + another.y);
}

 minus(another){
  return new Vector(this.x - another.x, this.y - another.y);
 }

  get length(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
 }
}
let vec = new Vector(1,2);
console.log(vec)
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// Vector {x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// Vector {x: -1, y: -1}
console.log(new Vector(3, 4).length);
// 5