$(document).ready(function(){
		$( ".numberButton" ).click(function() {
    	var stack = $(this).val();
			 $("#calculatorInput").val(stack);
			 if (calculatorInput.value) {
        	stack.push(parseInt(calculatorInput.value));
        	calculatorInput.value = '';
				};
			  
			
			//I need to create a variable and a function that assign the values inputted to the variable. 
			//once 2 numberButtons are pushed and an operator button is pushed the value is calculated and stored
			
			//check for a operator push
			// if i complie the inputs into a list then ask it to be computed once the equals sign is pressed DO I need to change the class of the operators should it be for each individual or a class for all
			//
			//change display vaue to calculatorIntput
			//pass in variable to calculatorInput
			//put display variable like I had in first function
			//get the calc to calc 2 numbers at a time, and display it
			//
			
});
});




var nextOp;

$(".clearButton").click(function(){
		$("#calculatorInput").val(" ");
});