function Enemy1(img,x){
	this.x = x;
	this.img =img;
	this.speed = -2;
    this.gravity = -0.25;
	this.y = 350;
	this.w = 125;
    this.h = 250;
	this.drawenemy=function(){
		image(this.img, this.x, this.y , this.w, this.h);
	}
	this.move=function(){
        if(this.x>700){
            this.x = this.x + this.speed;
            this.y = this.y + this.gravity;
        }
	}
}