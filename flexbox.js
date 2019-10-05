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
	var objDisplayContainer01 = document.getElementById("chbDisplayContainer01");
	objDisplayContainer01.addEventListener("click", clickDisplayContainer01);
	objDisplayContainer01.checked = false;
	
	document.getElementById("txt_wrapper").value="";
	document.getElementById("txt_container_01").value="";

	const n = {
		wrapper: 0,
		container_01: 1
	};
	const ns = ["wrapper", "container_01"];
	var nsu = ["#wrapper", "#container_01"];

	var aOutput = new Array(nsu.length);
	var objWrapper = document.getElementById(ns[n.wrapper]);
	var objContainer01 = document.getElementById(ns[n.container_01]);


/* 	function initOutput() {
		for (var i=0; i<nsu.length; i++) {
			var obj = document.getElementById("txt_" + ns[i]);
			obj.onchange = function() {
				nsu[i] = obj.value;
				if (document.getElementById("chbDisplayWrapper").checked) {
					aOutput[i]= nsu[i] + " {\n\tdisplay: flex;\n}";
					funOutput();
				}
			}
		}
	}
	initOutput();  */

	var txt_wrapper = document.getElementById('txt_wrapper');
	txt_wrapper.onchange = function() {
		nsu[n.wrapper] = txt_wrapper.value;
		if (document.getElementById("chbDisplayWrapper").checked) {
			aOutput[n.wrapper]= nsu[n.wrapper] + " {\n\tdisplay: flex;\n}";
			funOutput();
		}
	}
	var txt_container_01 = document.getElementById('txt_container_01');
	txt_container_01.onchange = function() {
		nsu[n.container_01] = txt_container_01.value;
		if (document.getElementById("chbDisplayContainer01").checked) {
			aOutput[n.container_01]= nsu[n.container_01] + " {\n\tdisplay: flex;\n}";
			funOutput();
		}
	}

	function clickDisplayWrapper(event) {
		if (event.target.checked == true){
			objWrapper.style.display = "flex";
			objWrapper.childNodes[0].nodeValue = ns[n.wrapper] + " -> display:flex";
			aOutput[n.wrapper]= nsu[n.wrapper] + " {\n\tdisplay: flex;\n}";
		} else {
			objWrapper.style.display = "block";
			objWrapper.childNodes[0].nodeValue = ns[n.wrapper] + " -> display:block";
			aOutput[n.wrapper]="";
		};
		funOutput();
	}
	function clickDisplayContainer01(event) {
		if (event.target.checked == true){
			objContainer01.style.display="flex";
			objContainer01.childNodes[0].nodeValue = ns[n.container_01] + " -> display:flex";
			aOutput[n.container_01]= nsu[n.container_01] + " {\n\tdisplay: flex;\n}";
		} else {
			objContainer01.style.display="block";
			objContainer01.childNodes[0].nodeValue = ns[n.container_01] + " -> display:block";
			aOutput[n.container_01]="";
		};
		funOutput();
	}

	function funOutput() {
		var sStr =  new String;
		
		typeof aOutput[n.wrapper] != "undefined" && aOutput[n.wrapper] != "" ? sStr += aOutput[n.wrapper] + "\n" : "" ;
		typeof aOutput[n.container_01] != "undefined" && aOutput[n.container_01] != "" ? sStr += aOutput[n.container_01] + "\n" : "" ;
		
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
