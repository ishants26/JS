function Bg(img){
    this.x = 0;
	this.y = 0;
	this.w = 1250;
    this.h = 625;
	this.img = img;
    this.drawbg  = function(){
		image(this.img,this.x, this.y , this.w, this.h);
	}
}