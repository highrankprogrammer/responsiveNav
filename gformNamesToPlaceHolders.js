// gformNamesToPlaceHolders 0.0.1
// Copyright 2014 Aaron John Schlosser
// Adds placeholder text to Gravity Forms fields based on class names.
var gformNamesToPlaceHolders = function() {
	function getGformName(s) {
		if (s.indexOf("gfield_error") == -1) {
			s = s.slice(10,s.lastIndexOf("  "));
			return s.slice(0,s.indexOf("  "));
		}
		else return s.slice(21,s.lastIndexOf("  "));	
	}
	var a = document.getElementsByClassName("ginput_container");
	for (var i = 0; i < a.length; i++) a[i].firstChild.setAttribute("placeholder", getGformName(a[i].parentNode.getAttribute("class")));
}
gformNamesToPlaceHolders();