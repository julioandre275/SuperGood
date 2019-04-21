var bg_arr = ['sg_bg.jpg','sg2_bg.jpg','sg3_bg.jpg','sg4_bg.jpg','sg5_bg.jpg','sg6_bg.jpg','sg7_bg.jpg']
document.body.style.backgroundImage= "url("+'images/'+bg_arr[0]+")";
document.body.style.backgroundPosition = "fixed"
var curr_bg
setInterval(function(){
	curr_bg = Math.floor(Math.random()*6)
	document.body.style.backgroundImage= "url("+'/images/'+bg_arr[curr_bg]+")";

	},2500);