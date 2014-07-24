<script>
	function pressify(s) { return s.replace(/\u0020\u0026\u0020/g, "").replace(/ /g, "-").replace(/\u2019/g, "").replace(/\u002E/g, "").replace(/\u003F/g, ""); }
	var a = document.getElementsByClassName("wp-link");
	for (var i = 0; i < a.length; i++) {
		console.log(a[i].href = pressify(a[i].innerText.toLowerCase()));
	}
</script>