var num = $(".to-dos").length;
$("#toggole-button").click(
  function(){
  	$("#toggole-button").toggle(function(){
  		$("#toggole-button").attr("scr","./images/icon-sun.svg");
  		$(".head").css({"background-image":" url(./images/bg-mobile-dark.jpg)"});
  		$("body").css({"background-color":" hsl(235, 21%, 11%)"});
  		$(".to-do-cr").css({"background-color":"hsl(235, 24%, 19%)"});
  		$(".to-dos").css({"background-color":"hsl(235, 24%, 19%)"});
  		$(".list-comand").css({"background-color":"hsl(235, 24%, 19%)"});
  		$(".items").css({"background-color":"hsl(235, 24%, 19%)"});
  	}
  	);
  }
	);