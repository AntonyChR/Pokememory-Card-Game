export default class Vector2d{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.norm = Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    add(vector){
        return new Vector2d(this.x + vector.x ,this.y + vector.y);
    }
    subs(vector){
        return new Vector2d(this.x - vector.x ,this.y - vector.y);
    }
    dot(vector){
        return this.x * vector.x + this.y * vector.y;
    }
    unit(){
        return new Vector2d(this.x / this.norm, this.y / this.norm);
    }
    fromAngle(alpha, norm = 1){
       return new Vector2d(norm * Math.cos(alpha), norm * Math.sin(alpha)); 
    }
}

