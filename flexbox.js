'use strict';
document.addEventListener('DOMContentLoaded', function () {
 
	// Hauptelement
	var tagMain = document.getElementsByTagName("main");
	tagMain[0].style.display="block";

	// Flexboxen
	var flexItems = document.getElementsByClassName("fi");

	// Display
	var fsDisplay = document.getElementById("display");
	fsDisplay.addEventListener("click", clickDisplay);
	document.getElementById("block").checked="true";

	// Flexbox mit Bild
	var chbFbCell = document.getElementById("chbFbCell");
	var flexitem4 = document.getElementById("flexitem4");
	chbFbCell.checked = false;
	chbFbCell.addEventListener("click", clickFbCell)

	// Flex-Direction
	var fsFlexDirection = document.getElementById("flex-direction");
	fsFlexDirection.addEventListener("click", clickFlexDirection);
	document.getElementById("row").checked="true";

	// Flex-Wrap
	var fsFlexWrap = document.getElementById("flex-wrap");
	fsFlexWrap.addEventListener("click", clickFlexWrap);
	document.getElementById("nowrap").checked="true";

	// Margin/Padding
	var chbPadMargin = document.getElementById("chbPadMargin");
	chbPadMargin.checked = false;
	chbPadMargin.addEventListener("click", clickPadMargin);

	subDisableFieldsets(true);

	// Display
	var objDisplayWrapper = document.getElementById("chbDisplayWrapper");
	objDisplayWrapper.addEventListener("click", clickDisplayWrapper);
	objDisplayWrapper.checked = false;
	var objDisplayContainer = document.getElementById("chbDisplayContainer");
	objDisplayContainer.addEventListener("click", clickDisplayContainer);
	objDisplayContainer.checked = false;
	
	var objWrapper = document.getElementById("wrapper");
	var objContainer = document.getElementById("container");
	function clickDisplayWrapper(event) {
		if (event.target.checked == true){
			objWrapper.style.display = "flex";
			objWrapper.childNodes[0].nodeValue = "wrapper -> display:flex";
		} else {
			objWrapper.style.display = "block";
			objWrapper.childNodes[0].nodeValue = "wrapper -> display:block";
		};
	}
	function clickDisplayContainer(event) {
		if (event.target.checked == true){
			objContainer.style.display="flex";
			objContainer.childNodes[0].nodeValue = "container -> display:flex";
		} else {
			objContainer.style.display="block";
			objContainer.childNodes[0].nodeValue = "container -> display:block";
		};
	}


	function clickDisplay(event) {
		tagMain[0].style.display = event.target.value;
		var sperren=true
		if (event.target.value=="flex"){sperren=false};
		subDisableFieldsets(sperren);
	}

	function clickFbCell(event) {
		flexitem4.classList.toggle("fb_cell");
	}

	function clickFlexDirection(event) {
		tagMain[0].style.flexDirection = event.target.value;
	}

	function clickFlexWrap(event) {
		tagMain[0].style.flexWrap = event.target.value;
	}

	function clickPadMargin(event) {
		var x;
		var offSet="2";
	
		if (event.target.checked == false) {offSet = "0"};
	
		for (x = 0; x < flexItems.length; x++) {
			flexItems[x].style.margin = offSet + "px";
			flexItems[x].style.padding = offSet + "px";
		}
	  }
	
	function subDisableFieldsets(mode) {
		fsFlexDirection.disabled=mode;
		fsFlexWrap.disabled=mode;
	}
  });
