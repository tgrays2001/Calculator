$(document).ready(function(){
		var calculatorInput = $("#calculatorInput");
	
		$( ".numberButton" ).click(function() {
    	var stack = $(this).val();
				calculatorInput.val(stack);
					$( ".oppButton" ).click(function() {
    	     var nextOp = $(this).val();
			 var arr = new Array();
				arr.push(stack);
			 if (calculatorInput.val()) {
        	arr.push(parseInt(calculatorInput.val()));
        	calculatorInput.val(" ");
				 if (nextOp && (arr.length >= 2)) {
        	var rhs = arr.pop();
        	var lhs = arr.pop();
        	switch (nextOp) {
            	case '+':
                	arr.push(lhs + rhs);
                	break;
            	case '-':
                	arr.push(lhs - rhs);
                	break;
							case '/':
                	arr.push(lhs / rhs);
                	break;
            	case '*':
                	arr.push(lhs * rhs);
                	break;
							case '+':
                	arr.push(lhs + rhs);
                	break;
            	case '=':
                	arr.push(lhs - rhs);
                	break;
							
        }
        nextOp = '';
    }
    calculatorInput.val(arr[arr.length - 1]);
		};
						$(".clearButton").click(function(){
							stack.val("");
							nextOp.val("");
		          calculatorInput.val(" ");
});
			  
			
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
});








$(".clearButton").click(function(){
		$("#calculatorInput").val(" ");
});