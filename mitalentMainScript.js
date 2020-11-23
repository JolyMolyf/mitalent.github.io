

console.log("Hi world!");





var isHidden = true;
 $(".burger").click(function() { 

 	if (isHidden == true){
 		$(".menu-item").addClass("hidden");
 		$(".line").addClass("arrow");
 		isHidden = false;
 	} else {
 		$(".menu-item").removeClass("hidden");
 		$(".line").removeClass("arrow");
 		isHidden = true;
 	}
	
 });
new fullpage('#fullpage', {
  sectionsColor: ['transparent', 'transparent'],
  slidesNavigation: false,
  controlArrows: true,
  navigation: true,
  verticalCentered: false,
  anchors:['firstPage', 'secondPage'],

});