//This is the start of making this calculator function//
$(document).ready(function () {
    var calculatorInput = $("#calculatorInput");
    var arr = new Array();
    var nextOp;
    var stack;


//Creating the function that will operate the numbers//

    $(".numberButton").click(function () {
        stack = $(this).val();
        calculatorInput.val(stack);
        arr.push(parseInt(stack));
        console.log("1st", stack);

    });
	
//Creating the function that will operate the operation buttons//

    $(".oppButton").click(function () {
        nextOp = $(this).val();
        arr.push(parseInt(stack));
        console.log("2nd", stack);

//Creating the if statement that analyzes what is in the array and displays it//
        if (calculatorInput.val()) {
            calculatorInput.val(arr);
            console.log("3rd", nextOp, arr);
            if (nextOp && (arr.length >= 2)) {
                console.log("here");
                var rhs = arr.pop();
                var lhs = arr.pop();
                switch (nextOp) {
                case '+':
                    arr.push(lhs + rhs);
                    console.log("plus");
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
                    arr.toString();
                    calculatorInput.val(eval(arr.join("")));
                    console.log("equ", arr);
                    break;

                }
                nextOp = '';
            }

        };
			//Created the function that will operate the clear buttons//
        $(".clearButton").click(function () {
            stack.val(" ");
            nextOp.val(" ");
            calculatorInput.val(" ");
        });
    });
});