	var chart_bg = new Image();
	chart_bg.src = "_images/chart_bg.gif"; //źródło
	chart_bg.onload = function() { //laduję obrazek
	myCanvas_context.drawImage(chart_bg,0,0); //umieszczam we wspórzędnych 0,0
	};