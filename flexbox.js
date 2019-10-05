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

	var aOutput = new Array();

	// Display
	var objDisplayWrapper = document.getElementById("chbDisplayWrapper");
	objDisplayWrapper.addEventListener("click", clickDisplayWrapper);
	objDisplayWrapper.checked = false;
	var objDisplayContainer01 = document.getElementById("chbDisplayContainer01");
	objDisplayContainer01.addEventListener("click", clickDisplayContainer01);
	objDisplayContainer01.checked = false;
	
	var objWrapper = document.getElementById("wrapper");
	var objContainer01 = document.getElementById("container_01");

	function clickDisplayWrapper(event) {
		if (event.target.checked == true){
			objWrapper.style.display = "flex";
			objWrapper.childNodes[0].nodeValue = "wrapper -> display:flex";
			aOutput["DisplayWrapper"]=".wrapper {\n\tdisplay: flex;\n}";
		} else {
			objWrapper.style.display = "block";
			objWrapper.childNodes[0].nodeValue = "wrapper -> display:block";
			aOutput["DisplayWrapper"]="";
		};
		funOutput();
		alert(aOutput["DisplayWrapper"]);
	}
	function clickDisplayContainer01(event) {
		if (event.target.checked == true){
			objContainer01.style.display="flex";
			objContainer01.childNodes[0].nodeValue = "container_01 -> display:flex";
			aOutput["DisplayContainer01"]=".container01 {\n\tdisplay: flex;\n}";
		} else {
			objContainer01.style.display="block";
			objContainer01.childNodes[0].nodeValue = "container_01 -> display:block";
			aOutput["DisplayContainer01"]="";
		};
		funOutput();
	}

	function funOutput() {
		var sStr = "";
		// for (var i = 0; i < aOutput.length; i++) {
		for (var s in aOutput) {}
			// sStr =+ aOutput(i) + "\n";
			sStr =+ s + "\n";
		}
		document.getElementById("output").childNodes[0].nodeValue = sStr;
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
