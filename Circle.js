class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        if(typeof radius === 'number' && radius > 0 ){
            this.radius = radius;
        }else{
            console.error('Invalid radius.Please provide a positive number.');
        }
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle: Radius = ${this.radius}, Color = ${this.color}`;
      }
}
const myCircle = new Circle(3,'blue');

const area = myCircle.getArea();
const circumference = myCircle.getCircumference();

console.log(myCircle.toString());
console.log(area.toFixed(2));
console.log(circumference.toFixed(2));

myCircle.setRadius(4);
myCircle.setColor('red');
console.log(myCircle.toString());