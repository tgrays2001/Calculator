//Declaring document variables//
$(document).ready(function () {
    var calculatorInput = $("#calculatorInput");
    var arr = new Array();
    var nextOp;
    var stack;
		var arr2 = new Array();
		var sum;


//Creating the function that will operate the numbers//

    $(".numberButton").click(function () {
        arr.push($(this).val());
        calculatorInput.val(arr[arr.length-1]);
        //arr.push(parseInt(stack));//
			  console.log("1st", arr);
			  //stack = '';//

    });
	
//Creating the function that will operate the operation buttons//

    $(".oppButton").click(function () {
        nextOp = $(this).val();
        //arr.push(parseInt(stack))//;
				arr2.push(nextOp);
        console.log("2nd", arr, nextOp, arr2);

//Creating the if statement that analyzes what is in the array and displays it//
        if (calculatorInput.val()) {
            calculatorInput.val(arr);
            console.log("3rd", nextOp, arr);
            if (nextOp && (arr.length >= 2)) {
                console.log("here",arr.length);
                var rhs = arr.pop();
							  console.log("4th", rhs);
                var lhs = arr.pop();
								console.log("5th", lhs);
                switch (arr2[0]) {
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
										sum = $(this).val;
										console.log(arr, arr2,"multi",sum );
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
								calculatorInput.val(arr);
                nextOp = '';
            }

        };
			//Created the function that will operate the clear buttons//
        $(".clearButton").click(function () {
            stack = '';
            nextOp = '';
						arr = [];
					  arr2 = [];
            calculatorInput.val('');
						//calculatorInput = $("#calculatorInput");//
					  console.log(arr,"clear")
        });
    });
});