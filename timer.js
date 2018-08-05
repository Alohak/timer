function clock(){
	var time = new Date();
	document.getElementById("clock").value = time;
}
var i = setInterval("clock()",100);