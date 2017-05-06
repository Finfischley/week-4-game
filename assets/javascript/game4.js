var wins= 0;
	
var losses= 0;
	
var counter= 0;

var topCrystal = $("#top-crystal");
var leftCrystal = $("#left-crystal");
var rightCrystal = $("#right-crystal");
var bottomCrystal = $("#bottom-crystal");

var sumNmbr1;
var sumNmbr2;
var sumNmbr3;
var sumNmbr4;

var targetNumber;

$("#targetNumber").ready(function() {
	
	

	function reset(){
		sumNmbr1= Math.floor(Math.random()*11+1)
		sumNmbr2= Math.floor(Math.random()*11+1)
		sumNmbr3= Math.floor(Math.random()*11+1)
		sumNmbr4= Math.floor(Math.random()*11+1)
		counter = 0;

		targetNumber =  Math.floor((Math.random() * 101) + 19);
		$("#targetNumber").html(targetNumber);
		$("#counter").html("");
	}

	reset();


	$("#top-crystal").on("click", function() {
		counter = counter + sumNmbr1;
		//console.log(crunchNumbers);
		$("#counter").html(counter);
		determine_possible_result();
	})		
	$("#left-crystal").on("click", function() {
		counter = counter + sumNmbr2;
		//console.log(crunchNumbers);
		$("#counter").html(counter);
		determine_possible_result();
	})		
	$("#right-crystal").on("click", function() {
		counter = counter + sumNmbr3;
		//console.log(crunchNumbers);
		$("#counter").html(counter);
		determine_possible_result();
	})		
	$("#bottom-crystal").on("click", function() {
		counter = counter + sumNmbr4;
		//console.log(crunchNumbers);
		$("#counter").html(counter);
		determine_possible_result();
	})


	function determine_possible_result(){
		if(counter === targetNumber) {
			alert("won");
			wins++;
			$("#wins").html("WINS:" + wins);
			 reset();
		}	
		 else if(counter > targetNumber) {
		 	alert("lost");
		 	losses++;
		 	counter = 0;
		 	$("#losses").html("LOSSES:" + losses);
		 	reset();
		}
	}
});