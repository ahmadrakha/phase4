a = document.getElementById("1");
b = document.getElementById("2");
c = document.getElementById("3");
d = document.getElementById("4");
e = document.getElementById("5");
f = document.getElementById("6");
g = document.getElementById("7");
h = document.getElementById("8");
i = document.getElementById("9");
j = document.getElementById("10");
k = document.getElementById("11");
l = document.getElementById("12");
m = document.getElementById("13");
n = document.getElementById("14");
o = document.getElementById("15");
p = document.getElementById("16");
q = document.getElementById("17");

function anagram(el){
	if (el.src.match("images/a.png")){
		el.src = "images/e.png";	
	} else if (el.src.match("images/e.png")){
		el.src = "images/p.png";
	} else if (el.src.match("images/p.png")){
		el.src = "images/o.png";
	} else if (el.src.match("images/o.png")){
		el.src = "images/b.png";
	} else if (el.src.match("images/b.png")){
		el.src = "images/i.png";
	} else if (el.src.match("images/i.png")){
		el.src = "images/m.png";
	} else if (el.src.match("images/m.png")){
		el.src = "images/r.png";
	} else if (el.src.match("images/r.png")){
		el.src = "images/n.png";
	} else if (el.src.match("images/n.png")){
		el.src = "images/y.png";
	} else if (el.src.match("images/y.png")){
		el.src = "images/h.png";
	} else if (el.src.match("images/h.png")){
		el.src = "images/space.png";
	} else if (el.src.match("images/space.png")){
		el.src = "images/d.png";
	} else if (el.src.match("images/d.png")){
		el.src = "images/s.png";
	} else if (el.src.match("images/s.png")){
		el.src = "images/a.png";
	} else {
		// do nothing
	}
}

function image1(el){
	el.src = "";
	document.getElementById("us1").src =("images/b.png");
}
function image2(el){
	el.src = "";
	document.getElementById("us2").src =("images/o.png");
}
function image3(el){
	el.src = "";
	document.getElementById("us3").src =("images/h.png");
}
function image4(el){
	el.src = "";
	document.getElementById("us4").src =("images/e.png");
}
function image5(el){
	el.src = "";
	document.getElementById("us5").src =("images/m.png");
}
function image6(el){
	el.src = "";
	document.getElementById("us6").src =("images/i.png");
}
function image7(el){
	el.src = "";
	document.getElementById("us7").src =("images/a.png");
}
function image8(el){
	el.src = "";
	document.getElementById("us8").src =("images/n.png");
}
function image9(el){
	el.src = "";
	document.getElementById("us10").src =("images/r.png");
}
function image10(el){
	el.src = "";
	document.getElementById("us11").src =("images/h.png");
}
function image11(el){
	el.src = "";
	document.getElementById("us12").src =("images/a.png");
}
function image12(el){
	el.src = "";
	document.getElementById("us13").src =("images/p.png");
}
function image13(el){
	el.src = "";
	document.getElementById("us14").src =("images/s.png");
}
function image14(el){
	el.src = "";
	document.getElementById("us15").src =("images/o.png");
}
function image15(el){
	el.src = "";
	document.getElementById("us16").src =("images/d.png");
}
function image16(el){
	el.src = "";
	document.getElementById("us17").src =("images/y.png");
}
function jackpot(el) {
	if (a.src.match("images/b.PNG") && b.src.match("images/o.PNG") && c.src.match("images/h.PNG") && d.src.match("images/e.PNG") && e.src.match("images/m.PNG") && f.src.match("images/i.PNG") && g.src.match("images/a.PNG") && h.src.match("images/n.PNG") && i.src.match("images/space.PNG") && j.src.match("images/r.PNG") && k.src.match("images/h.PNG")&& l.src.match("images/a.PNG") && m.src.match("images/p.PNG") && n.src.match("images/s.PNG") && o.src.match("images/o.PNG") && p.src.match("images/d.PNG") && q.src.match("images/y.PNG")){
		document.getElementById('you-win').play()
		console.log("You Win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		e.classList.add("opaque");
		f.classList.add("opaque");
		g.classList.add("opaque");
		h.classList.add("opaque");
		i.classList.add("opaque");
		j.classList.add("opaque");
		k.classList.add("opaque");
		l.classList.add("opaque");
		m.classList.add("opaque");
		n.classList.add("opaque");
		o.classList.add("opaque");
		p.classList.add("opaque");
		q.classList.add("opaque");
	}else {
	}
}
