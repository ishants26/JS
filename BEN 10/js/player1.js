function Player1(img,w,h,y,x){
	this.x = x;
	this.y = y;
	this.w = w;
    this.h = h;
	this.img = img;
	this.gravity = 0.5;
	this.speed = 0.5;
	this.drawPlayer  = function(){
		image(this.img,this.x, this.y , this.w, this.h);
	}
    this.change = function(img,w,h,y,x){
        this.img = img;
        this.w = w;
        this.h = h;
        this.y = y;
        this.x = x;
    }
}