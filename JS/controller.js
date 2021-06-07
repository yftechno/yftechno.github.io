const Tags = Array.from(document.getElementsByClassName("tags"));

function clearTag(element) {
	element.style.display = "none";
	element.style.order = 0;
}

function clearView() {
	Tags.forEach(element => clearTag(element));
}


function showContent(content) {
	clearView();
	const element = document.getElementById("content-"+content);
	element.style.order = -1;
	element.style.display = "block";
}

showContent("self");