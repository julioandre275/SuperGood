var im = document.getElementsByClassName("card");
var im1 = im[0]
var im2 = im[1]
im1.addEventListener('mouseover' , function(){
    im1.style.opacity = "0.4";
})
im2.addEventListener('mouseover' , function(){
        im2.style.opacity ="0.4";
})
im2.addEventListener('mouseout' , function(){
    im2.style.opacity ="1";
})
im1.addEventListener('mouseout' , function(){
    im1.style.opacity ="1";
})
