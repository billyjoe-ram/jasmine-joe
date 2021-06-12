class Calc {
    constructor() {}

    sum(...nums) {
    	const sumNums = nums;
    	// Neuter element in sum
    	let sumResult = 0;

    	sumNums.forEach((num) => {
    		sumResult += num;
    	});

    	return sumResult;
    }

    subtr(...nums) {
    	const subtrNums = nums;
    	// Retrieving first value to subtract from HIM on
    	let subtrResult = subtrNums[0];

    	subtrNums.forEach((num, index) => {
    		if (index !== 0) {
    			subtrResult -= num;
    		}
    	});

    	return subtrResult;
    }

    mult(...nums) {
		const multNums = nums;
		// Neuter element in multiplication
		let multResult = 1;

		multNums.forEach((num, index) => {
			multResult *= num;
		});

		return multResult;
    }

    divide(...nums) {
		const divNums = nums;
		// Retrieving first value to divide from HIM on
		let divResult = divNums[0];

		divNums.forEach((num, index) => {			
			if (index !== 0) {
				if (num != 0) {
					divResult /= num;
				} else {
					console.error("Invalid division")
				}
    		}
		});

		return divResult;
    }
}
