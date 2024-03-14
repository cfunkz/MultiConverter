async function calcCurrency(value, fromCurrency, toCurrency) {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        
        const conversionRate = data.rates[toCurrency];
        if (!conversionRate) {
            alert('Exchange rate error');
            return null;
        }
        
        const result = parseFloat(value) * conversionRate;
        return result.toFixed(2) + ' ' + toCurrency;
    } catch (error) {
        console.error('Failed to get current rates:', error);
        alert('Please try again later.');
        return null;
    }
}

async function convertCurrency() {
    var inputValue = document.getElementById('valueInputCurrency').value;
    var fromCurrency = document.getElementById('currency-from-selection').value;
    var toCurrency = document.getElementById('currency-to-selection').value;
    
    const result = await calcCurrency(inputValue, fromCurrency, toCurrency);
    
    if (result !== null) {
        document.getElementById('resultLabelCurrency').innerText = result;
        document.getElementById('resultCardCurrency').style.display = 'block';
    }
}

function openConverter(type) {
    document.getElementById('metric').style.display = type === 'metric' ? 'block' : 'none';
    document.getElementById('imperial').style.display = type === 'imperial' ? 'block' : 'none';
    document.getElementById('currency').style.display = type === 'currency' ? 'block' : 'none';
    document.getElementById('decimal-to-binary').style.display = type === 'decimal-to-binary' ? 'block' : 'none';
    document.getElementById('binary-to-decimal').style.display = type === 'binary-to-decimal' ? 'block' : 'none';
}

function convertMetric() {
    var inputValue = document.getElementById('valueInputMetric').value;
    var conversionType = document.getElementById('metric-selection').value;
    var result = calcMetric(inputValue, conversionType);
    document.getElementById('resultLabelMetric').innerText = result;
    document.getElementById('resultCardMetric').style.display = 'block';
}
function convertImperial() {
    var inputValue = document.getElementById('valueInputImperial').value;
    var conversionType = document.getElementById('imperial-selection').value;
    var result = calcImperial(inputValue, conversionType);
    document.getElementById('resultLabelImperial').innerText = result;
    document.getElementById('resultCardImperial').style.display = 'block';
}

function calcMetric(value, conversionType) {
    var result;
    switch (conversionType) {
        case 'mm-in':
            result = parseFloat(value) * 0.0393701;
            return (value + " Milimeters" + "\n=\n" + result.toFixed(2) + " Inches");
        case 'cm-in':
            result = parseFloat(value) * 0.393701;
            return (value + " Centimeters" + "\n=\n" + result.toFixed(2) +  " Inches");
        case 'm-ft':
            result = parseFloat(value) * 3.28084;
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Feet");
        case 'km-mi':
            result = parseFloat(value) * 0.621371;
            return (value + " Kilometers" + "\n=\n" + result.toFixed(2) + " Miles");
        case 'ml-fl':
            result = parseFloat(value) * 0.033814;
            return (value + " Mililiters" + "\n=\n" + result.toFixed(2) + " Fluid Ounces");
        case 'cl-fl':
            result = parseFloat(value) * 0.33814;
            return (value + " Centiliters" + "\n=\n" + result.toFixed(2) + " Fluid Ounces");
        case 'l-fl':
            result = parseFloat(value) * 33.814;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Fluid Ounces");
        case 'l-gal':
            result = parseFloat(value) * 0.264172;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Gallons");
        case 'kpl-mpg':
            result = parseFloat(value) * 2.35215;
            return (value + " Kilometers Per Liter" + "\n=\n" + result.toFixed(2) + " Miles Per Gallon");
        case 'kl-gal':
            result = parseFloat(value) * 264.172;
            return (value + " Kiloliters" + "\n=\n" + result.toFixed(2) + " Gallons");
        case 'mg-oz':
            result = parseFloat(value) * 0.000035274;
            return (value + " Miligrams" + "\n=\n" + result.toFixed(2) + " Ounces");
        case 'g-oz':
            result = parseFloat(value) * 0.035274;
            return (value + " Grams" + "\n=\n" + result.toFixed(2) + " Ounces");
        case 'kg-st':
            result = parseFloat(value) * 0.157473;
            return (value + " Kilograms" + "\n=\n" + result.toFixed(2) + " Stone");
        case 'kg-lb':
            result = parseFloat(value) * 2.20462;
            return (value + " Kilograms" + "\n=\n" + result.toFixed(2) + " Pounds");
        case 'ton-lb':
            result = parseFloat(value) * 2204.62;
            return (value + " Tonnes" + "\n=\n" + result.toFixed(2) + " Pounds");
        case 'ton-st':
            result = parseFloat(value) * 157.473;
            return (value + " Tonnes" + "\n=\n" + result.toFixed(2) + " Stone");
        case 'm-yd':
            result = parseFloat(value) * 1.09361;
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Yards");
        case 'kph-mph':
            var result = parseFloat(value) / 1.60934;
            return (value + " KPH" + "\n=\n" + result.toFixed(2) + " MPH");
        case 'm2-ft2':
            result = parseFloat(value) * 10.7639;
            return (value + " Square Meters" + "\n=\n" + result.toFixed(2) + " Square Feet");
        case 'c-f':
            result = (parseFloat(value) * 9/5) + 32;
            return (value + " Celsius" + "\n=\n" + result.toFixed(2) + " Fahrenheit");
        case 'hectares-acres':
            result = parseFloat(value) / 0.404686;
            return (value + " Hectares" + "\n=\n" + result.toFixed(2) + " Acres");
        case 'g-kg':
            result = parseFloat(value) / 1000;
            return (value + " Grams" + "\n=\n" + result.toFixed(2) + " Kilograms");
        case 'mg-g':
            result = parseFloat(value) / 1000;
            return (value + " Milligrams" + "\n=\n" + result.toFixed(2) + " Grams");
        case 'mg-kg':
            result = parseFloat(value) / 1000000;
            return (value + " Milligrams" + "\n=\n" + result.toFixed(2) + " Kilograms");
        case 'kg-g':
            result = parseFloat(value) * 1000;
            return (value + " Kilograms" + "\n=\n" + result.toFixed(2) + " Grams");
        case 'g-mg':
            result = parseFloat(value) * 1000;
            return (value + " Grams" + "\n=\n" + result.toFixed(2) + " Milligrams");
        case 'kg-mg':
            result = parseFloat(value) * 1000000;
            return (value + " Kilograms" + "\n=\n" + result.toFixed(2) + " Milligrams");
        case 'ml-l':
            result = parseFloat(value) / 1000;
            return (value + " Milliliters" + "\n=\n" + result.toFixed(2) + " Liters");
        case 'cl-l':
            result = parseFloat(value) / 10;
            return (value + " Centiliters" + "\n=\n" + result.toFixed(2) + " Liters");
        case 'kl-l':
            result = parseFloat(value) * 1000;
            return (value + " Kiloliters" + "\n=\n" + result.toFixed(2) + " Liters");
        case 'kl-ml':
            result = parseFloat(value) * 1000000;
            return (value + " Kiloliters" + "\n=\n" + result.toFixed(2) + " Milliliters");
        case 'l-ml':
            result = parseFloat(value) * 1000;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Milliliters");
        case 'l-cl':
            result = parseFloat(value) * 100;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Centiliters");
        case 'l-kl':
            result = parseFloat(value) / 1000;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Kiloliters");
       case 'mm-cm':
            result = parseFloat(value) / 10;
            return (value + " Millimeters" + "\n=\n" + result.toFixed(2) + " Centimeters");
        case 'cm-mm':
            result = parseFloat(value) * 10;
            return (value + " Centimeters" + "\n=\n" + result.toFixed(2) + " Millimeters");
        case 'km-m':
            result = parseFloat(value) * 1000;
            return (value + " Kilometers" + "\n=\n" + result.toFixed(2) + " Meters");
        case 'm-km':
            result = parseFloat(value) / 1000;
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Kilometers");
        case 'm-cm':
            result = parseFloat(value) * 100; // 1 meter = 100 centimeters
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Centimeters");
        case 'm-mm':
            result = parseFloat(value) * 1000; // 1 meter = 1000 millimeters
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Millimeters");

        default:
            return 'Invalid conversion type';
    }
}

function calcImperial(value, conversionType) {
    var result;
    switch (conversionType) {
        case 'in-mm':
            result = parseFloat(value) * 25.4;
            return (value + " Inches" + "\n=\n" + result.toFixed(2) + " Millimeters");
        case 'in-cm':
            result = parseFloat(value) * 2.54;
            return (value + " Inches" + "\n=\n" + result.toFixed(2) + " Centimeters");
        case 'ft-m':
            result = parseFloat(value) * 0.3048;
            return (value + " Feet" + "\n=\n" + result.toFixed(2) + " Meters");
        case 'mi-km':
            result = parseFloat(value) * 1.60934;
            return (value + " Miles" + "\n=\n" + result.toFixed(2) + " Kilometers");
        case 'fl-ml':
            result = parseFloat(value) * 29.5735;
            return (value + " Fluid Ounces" + "\n=\n" + result.toFixed(2) + " Milliliters");
        case 'fl-l':
            result = parseFloat(value) / 33.814; 
            return (value + " Fluid Ounces" + "\n=\n" + result.toFixed(2) + " Liters");    
        case 'mpg-kpl':
            result = parseFloat(value) / 2.35215;
            return (value + " Miles Per Gallon" + "\n=\n" + result.toFixed(2) + " Kilometers Per Liter");        
        case 'gal-l':
            result = parseFloat(value) * 3.78541;
            return (value + " Gallons" + "\n=\n" + result.toFixed(2) + " Liters");
        case 'oz-mg':
            result = parseFloat(value) * 28349.5;
            return (value + " Ounces" + "\n=\n" + result.toFixed(2) + " Milligrams");
        case 'oz-g':
            result = parseFloat(value) * 28.3495;
            return (value + " Ounces" + "\n=\n" + result.toFixed(2) + " Grams");
        case 'lb-g':
            result = parseFloat(value) * 453.592;
            return (value + " Pounds" + "\n=\n" + result.toFixed(2) + " Grams");
        case 'st-kg':
            result = parseFloat(value) * 6.35029;
            return (value + " Stones" + "\n=\n" + result.toFixed(2) + " Kilograms");
        case 'st-ton':
            var result = parseFloat(value) / 142.857;
            return (value + " Stone" + "\n=\n" + result.toFixed(2) + " Tons");
        case 'yd-m':
            var result = parseFloat(value) / 1.09361;
            return (value + " Yards" + "\n=\n" + result.toFixed(2) + " Meters");
        case 'mph-kph':
            var result = parseFloat(value) * 1.60934;
            return (value + " MPH" + "\n=\n" + result.toFixed(2) + " KPH");
        case 'ft2-m2':
            result = parseFloat(value) / 10.7639; 
            return (value + " Square Feet" + "\n=\n" + result.toFixed(2) + " Square Meters");
        case 'f-c':
            result = (parseFloat(value) - 32) * 5/9; 
            return (value + " Fahrenheit" + "\n=\n" + result.toFixed(2) + " Celsius");
        case 'acres-hectares':
            result = parseFloat(value) * 0.404686;
            return (value + " Acres" + "\n=\n" + result.toFixed(2) + " Hectares");     
        default:
            return 'Invalid conversion type';
    }
}

// Decimal to Binary
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Binary to Decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Convert Decimal to Binary
function convertDecimalToBinary() {
    var decimalInput = document.getElementById('decimalInput').value;
    var binaryResult = decimalToBinary(decimalInput);
    var binaryResult16Bits = binaryResult.length > 16 ? 'NaN' : binaryResult.padStart(16, '0');
    var binaryResult8Bits = binaryResult.length > 8 ? 'NaN' : binaryResult.padStart(8, '0');

    document.getElementById('resultLabelDecimalToBinary').innerText = binaryResult;
    document.getElementById('resultLabelDecimalToBinary16Bits').innerText = binaryResult16Bits;
    document.getElementById('resultLabelDecimalToBinary8Bits').innerText = binaryResult8Bits;
    document.getElementById('resultCardDecimalToBinary').style.display = 'block';
}
  
  // Convert Binary to Decimal
function convertBinaryToDecimal() {
    var binaryInput = document.getElementById('binaryInput').value;
    var decimalResult = binaryToDecimal(binaryInput);
    
    document.getElementById('resultLabelBinaryToDecimal').innerText = decimalResult;
    document.getElementById('resultCardBinaryToDecimal').style.display = 'block';
}
