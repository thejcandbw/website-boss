jQuery(document).ready(function() {
	//Global
	var currentSection;
	var navOpened = false;
	var covered = true;
	var windowWidth = jQuery(window).innerWidth();
	var windowHeight = jQuery(window).innerHeight();
	var windowCenterX = windowWidth/2;
	var windowCenterY = windowHeight/2;
	var textTl = new TimelineMax();
	
	//Preloader / Emitter / Cover
	//Preload		
	function preload() {
			var preloadTl = new TimelineMax();
			
			preloadTl.set( jQuery("#preloader"), {autoAlpha:1});
			
			if (document.getElementById('slider') == null || document.getElementById('distorted') == null) {
				preloadTl.set( jQuery("#interface"), {autoAlpha:1, scale:1.5});
			} else {
				preloadTl.set( jQuery("#interface"), {autoAlpha:0, scale:1.5});
			}
			
			preloadTl.to( jQuery("#preloader"), 1, {scale:1.15, autoAlpha:0, ease:Expo.easeInOut});
			preloadTl.to( jQuery("#interface"), 3, {scale:1, autoAlpha:1, ease:Expo.easeOut});	
			
			setTimeout(particles,0);
			setTimeout(titleIn,0);
	}
	

	
	//Start
	preload();



	
	//GSAP Particles
	function particles() {
		var density = 10,
			speed = 1,
			body = jQuery("#particles"),
			i, 
			particle;
		
		function spawn(particle) {
			var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
				partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);
	
			//set the starting values
			TweenLite.set(particle, {y:getRandom(-100, -250), x:getRandom(windowCenterX-(windowWidth/3), windowCenterX+(windowWidth/3)), scale:(getRandom(4, 8)/10), rotation:getRandom(0,30)});
			TweenLite.to(particle, getRandom(15,21), {physics2D:{velocity:getRandom(25,75), angle:getRandom(-180,180), gravity:15}, rotation:getRandom(0,360), onComplete:spawn, onCompleteParams:[particle]});
	
		}
		TweenLite.set(jQuery("#particles"), {rotation: 0.01,force3D: true});
		
		for (i = 0; i < density; i++) {
			spawn( jQuery("<div />", {id:"particle"+i}).addClass("particle" + Math.floor(getRandom(1,9))).appendTo(body) );
		}
	}
				
	//Utilities	
	function getRandom(min, max) {
	  return min + Math.random() * (max - min);
	}

				
	
});
