function Ob(img){
	this.x = 150;
	this.img =img;
	this.speed = 0.1;
    this.gravity = 0.03;
	this.y = 350;
	this.w = this.h = 50;
	this.drawobj=function(){
		image(this.img, this.x, this.y , this.w, this.h);
	}
	this.move=function(){
        if(this.x<=650){
            this.speed = this.speed + this.gravity;
	        this.x = this.x + this.speed;
            this.w +=this.gravity;
            this.h +=this.gravity;
        }
	}
    this.change=function(img,x){
        this.img =img;
        this.x = x;
    }
}