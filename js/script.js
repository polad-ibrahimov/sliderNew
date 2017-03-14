var slider = 1;


function plusSlider(n) {
    slider += n;
    showImg(slider);
}

function currentSlide(n){
    slider = n;
	showImg(slider);
}

function showImg(n){
    var x = document.getElementsByClassName('slider');
    var circile = document.getElementsByTagName("li");
    if(n > x.length) {
        slider = 1;
    }
    if(n < 1) {
        slider = x.length;
    }

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slider - 1].style.display = 'block';

    for(i=0; i < circile.length; i++){
		circile[i].className = circile[i].className.replace("active", "");
    }
    circile[slider - 1].className += "active";
}

showImg();