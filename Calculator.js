$(document).ready(function(){
		var calculatorInput = $("#calculatorInput");
	   var arr = new Array();
			var nextOp;
				var stack;
	
	$( ".oppButton" ).click(function() {
    	nextOp = $(this).val(); 
				console.log("1st");
	});
	
		$( ".numberButton" ).click(function() {
    	stack = $(this).val();
				calculatorInput.val(stack);
					arr.push(stack);
		});
			 if (calculatorInput.val()) {
        	arr.push(parseInt(calculatorInput.val()));
        	calculatorInput.val(" ");
				 if (nextOp && (arr.length >= 2)) {
					 console.log("here");
        	var rhs = arr.pop();
        	var lhs = arr.pop();
        	switch (nextOp) {
            	case '+':
                	arr.push(lhs + rhs);
							    console.log(arr);
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
									arr.pop();
									break;
							
        }
        nextOp = '';
    }
    calculatorInput.val(arr[arr.length - 1]);
		};
						$(".clearButton").click(function(){
							stack.val(" ");
							nextOp.val(" ");
		          calculatorInput.val(" ");
});
});
$(".equalButton").click(function() {
	calculatorInput.val(arr);
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