'use strict';
document.addEventListener('DOMContentLoaded', function () {
 
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
			objWrapper.getElementsByClassName("label")[0].innerHTML = ns[n.wrapper] + " ->\ndisplay:flex";
			aOutput[n.wrapper]= nsu[n.wrapper] + " {\n\tdisplay: flex;\n}";
		} else {
			objWrapper.style.display = "block";
			objWrapper.getElementsByClassName("label")[0].innerHTML = ns[n.wrapper];
			aOutput[n.wrapper]="";
		};
		funOutput();
	}
	function clickDisplayContainer01(event) {
		if (event.target.checked == true){
			objContainer01.style.display="flex";
			objContainer01.getElementsByClassName("label")[0].innerHTML = ns[n.container_01] + " ->\ndisplay:flex";
			aOutput[n.container_01]= nsu[n.container_01] + " {\n\tdisplay: flex;\n}";
		} else {
			objContainer01.style.display="block";
			objContainer01.getElementsByClassName("label")[0].innerHTML = ns[n.container_01] + " ;
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

});
