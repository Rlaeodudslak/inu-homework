"use strict";
/*
		this is my 3rd homework 
		part java script
*/
var pre ;
var now ;
var animation ;
var result  ;

(function() {

	window.onload = function(){ /* setting event handler */
		document.getElementById("startbutton").onclick = startanimation;
		document.getElementById("stopbutton").onclick = stopanimation;
		document.getElementById("medium").onclick = setsize;
		document.getElementById("big").onclick = setsize;
		document.getElementById("bigger").onclick = setsize;
		document.getElementById("stopbutton").disabled = true;

		var selectSpeed = document.getElementById("select");
		pre = selectSpeed.options[selectSpeed.selectedIndex].value;
		now = pre;
		selectSpeed.onchange = changespeed;
	} ;

	function setsize() { /* set font - size */
		document.getElementById("speedtester").style.fontSize = this.value;
	}

	function changespeed(){ /* set display speed */
		now = this.value;
	}

	function startanimation() {	 /* setting displayed text */
		document.getElementById("startbutton").disabled = true;
		document.getElementById("stopbutton").disabled = false;
		document.getElementById("textareabox").disabled = true;

		var Mystring = document.getElementById("textareabox").value;
		result = Mystring.split(/[ \t\n]+/);	

		var length = result.length;	
		var nochar = [',', '.', '!', '?', ';', ':'];

		for (var i = 0; i < length; i++) {
			var temp = result.shift();

  		  if (temp != "") {
				var last = temp.charAt(temp.length-1);
			
    			for (var j = 0; j < nochar.length; j++) {
    				if (last == nochar[j]) {
    					temp = temp.substring(0, temp.length-1);
						result.push(temp);
    					break;
    				}
   		 	}
			} /* if las is nochar , last is removed and that word be displayed for twice the normal amount of time*/
			result.push(temp);
  		}
		animation = setInterval(goanimation, now); 
	}

	function stopanimation() { /* stop animation */
		document.getElementById("stopbutton").disabled = true;
		document.getElementById("startbutton").disabled = false;
		document.getElementById("textareabox").disabled = false;
		clearInterval(animation);
		document.getElementById("speedtester").innerHTML = "";
	}
	
	function goanimation() { /* start display */
		if (now != pre) {
			clearInterval(animation);
			pre = now;
			animation = setInterval(goanimation, now); 
		}
		if (result.length == 0) {
			stopanimation(); 
		} 
		else {
			document.getElementById("speedtester").innerHTML = result.shift();
		}
	}

})();