function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
window.onload = function () {
	//Mobile menu
	var collapse = document.querySelectorAll(".collapse");
	var toggler = document.querySelector(".toggler");
	var navbar = document.querySelector(".navbar");
	var body = document.getElementsByTagName("body")[0];

	toggler.onclick = function () {
		toggler.classList.toggle("toggler_active");
		body.classList.toggle("body_lock");
		navbar.classList.toggle("navbar_active");
		for (var i = 0; i < collapse.length; i++) {
			(collapse[i]).classList.toggle("collapse_active");
		}
	}
	//Slider
	$(".slider__body").slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 7000,
		//centerMode: true,
	});
};