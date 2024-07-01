const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"dot":"dots1"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"dot":"dots2"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"dot":"dots3"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"dot":"dots4"
	}
];
let page=0;
let index ={};
let dots=document.getElementById("dots1");
let selected_dot=document.getElementById("dots1");
let arrow_left= document.getElementById("arrow_left");
let arrow_right= document.getElementById("arrow_right");
let un= document.getElementById("dots1");
let deux= document.getElementById("dots2");
let trois= document.getElementById("dots3");
let quatre= document.getElementById("dots4");
function ChangeSlide(sens) {
    page = page + sens;
    if (page < 0)
        page = slides.length - 1;
    if (page > slides.length - 1)
        page = 0;
	index=slides[page];
	dots=document.getElementById(index.dot);
	selected_dot.classList.remove("dot_selected");
	dots.classList.add("dot_selected");
	selected_dot=document.getElementById(index.dot);
    document.getElementById("banner-img").src = index.image;
	document.getElementById("text").innerHTML=index.tagLine;
}
function SelectSlide(page,dot) {
	let dots=document.getElementById(dot);
	selected_dot.classList.remove("dot_selected");
	dots.classList.add("dot_selected");
	selected_dot=document.getElementById(dot);
	index=slides[page];
    document.getElementById("banner-img").src = index.image;
	document.getElementById("text").innerHTML=index.tagLine;
}



arrow_left.addEventListener("click",function(){ChangeSlide(-1)},false);
arrow_right.addEventListener("click" , function(){ChangeSlide(1)},false);
un.addEventListener("click",function(){SelectSlide(0,"dots1")},false);
deux.addEventListener("click",function(){SelectSlide(1,"dots2")},false);
trois.addEventListener("click",function(){SelectSlide(2,"dots3")},false);
quatre.addEventListener("click",function(){SelectSlide(3,"dots4")},false);