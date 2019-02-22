function anagram(el){
	if (el.src.match("images/a.png")){
		// if the image is a cherry, change it to a lemon!
		el.src = "images/e.png";	
	} else if (el.src.match("images/e.png")){
		// if the image is a lemon, change it to an orange!
		el.src = "images/b.png";
	} else if (el.src.match("images/p.PNG")){
		// if the image is an orange, change it to a cherry!
		el.src = "images/o.PNG";
	} else {
		// do nothing
	}
}