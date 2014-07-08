var settings = {
	breakpointPx: 1000
};

HTMLDocument.prototype.getWidth = function(t) {
	return window.getComputedStyle(document.getElementsByTagName(t)[0],"").getPropertyValue("width");
}

var responsiveNav = function() {
	var rNav = this;
	rNav.dropDownMenus = [];
	show = function(e) {
		var e = e.menu;
		e.isHidden = false;
		var s = e.style;
		// save former settings
		e.oldDisplay = s.display;
		e.oldPosition = s.position;
		e.oldZIndex = s.zIndex;
		e.oldWidth = s.width;
		// apply new settings
		s.display = "block";
		s.position = "absolute";
		s.zIndex = "9999";
		s.width = "100%";
		s.top = e.topPx;
		s.left = 0;
	};
	hide = function(e) {
		var e = e.menu;
		e.isHidden = true;
		var s = e.style;
		// load saved settings
		s.display = e.oldDisplay;
		s.position = e.oldPosition;
		s.zIndex = e.oldZIndex;
		s.width = e.oldWidth;
	};
	this.dropDownMenu = function() {
		var menu = this;
		this.create = function(l, e) {
			menu.id = rNav.dropDownMenus.length;
			if (typeof l === "undefined") {
				return document.write("<p style='display:block;color:red;font-weight:bold'>Error: Could not create new dropdown menu.</p>");
			} else {
				var n = document.getElementsByClassName("nav-container")[menu.id];
				var b = document.createElement("div");
				b.className = "dropdown-menu-button";
				n.appendChild(b);
				var m = document.createElement("div");
				m.className = "dropdown-menu";
				n.appendChild(m);
				// parse the link array
				m = document.getElementsByClassName("dropdown-menu")[menu.id];
				for (var i = 0; i < l.length; i++) {
					if (l[i].length > 1) {
						var a = document.createElement("a");
						a.className = "dropdown-menu-link";
						a.innerText = l[i][0];
						a.href = l[i][1];
						m.appendChild(a);
					}
				}
			}
			this.init();
		};
		function drop(evt) {
			hide(menu);
			switch(evt.type) {
				case "mouseenter":
					show(menu);
					break;
				case "mouseleave":
					if (parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0],"").getPropertyValue("width"),10) < 1000) hide(menu);
					else show(menu);
					break;
				case "click":
					if (menu.isHidden) show(menu);
					else hide(menu);
					break;
				case "undefined":
					hide(menu);
					break;
				default:
					hide(menu);
					break;
			}
		};
		this.init = function() {
			this.button = document.getElementsByClassName("dropdown-menu-button")[this.id];
			this.menu = document.getElementsByClassName("dropdown-menu")[this.id];
			var b = this.button;
			var m = this.menu;
			m.addEventListener("mouseleave",drop,false);
			var s = m.style;
			// save former settings
			m.oldDisplay = s.display;
			m.oldPosition = s.position;
			m.oldZIndex = s.zIndex;
			m.oldWidth = s.width;
			b.addEventListener("mouseenter",drop,false);
			b.addEventListener("click",drop,false);
			rNav.dropDownMenus.push(this);
		};
	};
};

// Examples
var Navigator = new responsiveNav();
var dropDown1 = new Navigator.dropDownMenu().create([["Google", "http://www.google.com"],["Reddit", "http://www.reddit.com"]]);
var dropDown2 = new Navigator.dropDownMenu().create([["Google", "http://www.google.com"],["Reddit", "http://www.reddit.com"]]);