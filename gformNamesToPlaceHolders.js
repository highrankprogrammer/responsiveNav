var gformNamesToPlaceHolders = function() {
	function getGformName(s) {
		if (s.indexOf("gfield_error") == -1) {
			var n = s.lastIndexOf("  ");
			s = s.slice(10,n);
			n = s.indexOf("  ");
			s = s.slice(0,n);
			return s;
		} else {
			var n = s.lastIndexOf("  ");
			s = s.slice(21,n);
			return s;		
		}
	}
	var b = document.getElementById("gform_fields_1").childNodes;
	var inputs = document.getElementsByClassName("ginput_container");
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].firstChild.setAttribute
			("placeholder",
			getGformName(inputs[i].parentNode.getAttribute("class")));
	}
}