(() => {

	console.log("JavaScript is properly linked up");

	const box = document.querySelector('.box');

	function startAnimation() {
		TweenMax.to(box, 0.8, { x: 400, rotation: 20, scaleX: 2, scaleY: -20, y: 300});
	}

	function reset() {
		TweenMax.to(box, 0.8, { x: 0, rotation: 0, scale: 1, y: 0});

	}

	box.addEventListener("mouseover", startAnimation);
	box.addEventListener("mouseout", reset);

	//structure
	//TweenMax.to(el, time, {property});

})();