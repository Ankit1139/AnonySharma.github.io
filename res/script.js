temp=0;

function onClicked() {
	temp++;
	if(temp%2==0)
		document.getElementById("textt").style.color = "#FFFF32";
	else
		document.getElementById("textt").style.color = "#000";
}