//Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that 
//if you enter HEX color format it returns RGB and 
//if you enter RGB color format it returns HEX.

//WHAT I WANT TO DO:
// _ Create a function called convertHexAndRGB that
// _ accepts an input of either (A) alphanumeric string or (B) 3 numbers separated by commas, and then
// _ determines whether the input is (A) Hex or (B) RGB, and
	// _ HEX = Red / Green / Blue values represented by 6 characters (0-9, A-F), usually with # in front
	// _ RGB = Red / Green / Blue values represented by 3 numbers between 0 - 255
	// _ HEX (00) == RGB (0) && HEX (FF) == RGB (255)
// _ Converts the input into the other format (HEX > RGB or RGB > HEX), and
// _ Returns the new value

//Convert RGB to HEX:
function convertDeciToHexaDigit (inputDeciDigit) {
	let hexDigit;
	let deciDigit = Number(inputDeciDigit);

	if (deciDigit >= 0 && deciDigit <= 9) {
		hexDigit = deciDigit;
	}
	else {
		switch (deciDigit) {
		case 10 || '10': 
			hexDigit = 'A';
			break;
		case 11 || '11': 
			hexDigit = 'B';
			break;
		case 12 || '12': 
			hexDigit = 'C';
			break;
		case 13 || '13': 
			hexDigit = 'D';
			break;
		case 14 || '14': 
			hexDigit = 'E';
			break;
		case 15 || '15': 
			hexDigit = 'F';
			break;
		default: 
			hexDigit = 'ERROR';
		}
	}

	return hexDigit;
}

function convertDeciToHexaValue (inputDeciNumber) {
	let hexValue;
	let deciNumber = Number(inputDeciNumber);
	let equivalentToTensDigit = Math.floor(deciNumber / 16);
	let equivalentToOnesDigit = deciNumber % 16;

	let tensDigit = String(convertDeciToHexaDigit(equivalentToTensDigit));
	let onesDigit = String(convertDeciToHexaDigit(equivalentToOnesDigit));

	hexValue = tensDigit + onesDigit;

	return hexValue;
}

function convertRgbToHex (inputArray) {
	

	let rHex = convertDeciToHexaValue(inputArray[0]);
	let gHex = convertDeciToHexaValue(inputArray[1]);
	let bHex = convertDeciToHexaValue(inputArray[2]);
	let hexVal = rHex + gHex + bHex;
	return hexVal;
}

//Convert HEX to RGB:

function convertHexaToDeciDigit (inputHexaDigit) {
	let newDeciDigit;

	if (Number(inputHexaDigit) >= 0 && Number(inputHexaDigit) <= 9) {
		newDeciDigit = Number(inputHexaDigit);
	}
	else {
		switch (inputHexaDigit) {
		case 'A':
			newDeciDigit = 10;
			break;
		case 'B':
			newDeciDigit = 11;
			break;
		case 'C':
			newDeciDigit = 12;
			break;
		case 'D':
			newDeciDigit = 13;
			break;
		case 'E':
			newDeciDigit = 14;
			break;
		case 'F':
			newDeciDigit = 15;
			break;
		default:
			newDeciDigit = 'ERROR';
			break;
		}
	}
return newDeciDigit;
}

function convertHexaToDeciValue (inputHexaValue) {
	let deciVal;
	let hexaValue = String(inputHexaValue);

	let firstHexaDigit = hexaValue.slice(0,1);
	let secondHexaDigit = hexaValue.slice(1);

	let firstDeciDigit = (Number(convertHexaToDeciDigit(firstHexaDigit)))*16;
	let secondDeciDigit = (Number(convertHexaToDeciDigit(secondHexaDigit)));

	deciVal = String(firstDeciDigit + secondDeciDigit);

	return deciVal;
}

function breakHexaValueIntoThreeValues (inputHexaCode) { //leading 0s will be cut if entered as number
	let colorsInHex;
	let hexaCode = String(inputHexaCode);

	let rHex = hexaCode.slice(0, 2);
	let gHex = hexaCode.slice(2, 4);
	let bHex = hexaCode.slice(4);

	colorsInHex = [rHex, gHex, bHex];
	return colorsInHex;
}

function convertHexToRgb (inputHexaCode) {
	let rgbArray = [];

	let hexArray = breakHexaValueIntoThreeValues(inputHexaCode);
	
	for (i=0; i<hexArray.length; i++) {
		rgbArray.push(convertHexaToDeciValue(hexArray[i]));
	}

	return rgbArray;
}

//Determine HEX or RGB
function determineIfHexOrRgb (inputString) {
	let colorType;
	let inputToTest = inputString;

	if (typeof inputToTest === ('string' || 'number')) {
		colorType = 'HEX';
	}

	else if (typeof inputToTest === ('object')) {
		colorType = 'RGB';
	}
	else {
		colorType = 'ERROR';
	}
	return colorType;
}

function switchBetweenHexAndRgb (inputString) {
	let returnString;

	let stringToTest = inputString;

	if (determineIfHexOrRgb(stringToTest) === 'HEX') {
		returnString = convertHexToRgb(stringToTest);
	}
	else if (determineIfHexOrRgb(stringToTest) === 'RGB') {
		returnString = convertRgbToHex(stringToTest);
	}
	else {
		returnString = 'ERROR';
	}


	return returnString;
}