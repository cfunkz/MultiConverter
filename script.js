function openConverter(type) {
    document.getElementById('metric').style.display = type === 'metric' ? 'block' : 'none';
    document.getElementById('imperial').style.display = type === 'imperial' ? 'block' : 'none';
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
            return (value + " Milimeters" + "\n=\n" + result.toFixed(2) + " Feet");
        case 'km-mi':
            result = parseFloat(value) * 0.621371;
            return (value + " Kilometers" + "\n=\n" + result.toFixed(2) + " Miles");
        case 'ml-fl':
            result = parseFloat(value) * 0.033814;
            return (value + " Mililiters" + "\n=\n" + result.toFixed(2) + " Fluid Ounces");
        case 'cl-fl':
            result = parseFloat(value) * 0.33814;
            return (value + " Centiliters" + "\n=\n" + result.toFixed(2) + " Fluid Ounces");
        case 'l-gal':
            result = parseFloat(value) * 0.264172;
            return (value + " Liters" + "\n=\n" + result.toFixed(2) + " Gallons");
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
            return (value + " Tonnes" + "\n=\n" + result.toFixed(2) + " Pounds");
        case 'm-yd':
            result = parseFloat(value) * 1.09361;
            return (value + " Meters" + "\n=\n" + result.toFixed(2) + " Yards");
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
        case 'gal-l':
            result = parseFloat(value) * 3.78541;
            return (value + " Gallons" + "\n=\n" + result.toFixed(2) + " Liters");
        case 'oz-mg':
            result = parseFloat(value) * 28349.5;
            return (value + " Ounces" + "\n=\n" + result.toFixed(2) + " Milligrams");
        case 'lb-g':
            result = parseFloat(value) * 453.592;
            return (value + " Pounds" + "\n=\n" + result.toFixed(2) + " Grams");
        case 'st-kg':
            result = parseFloat(value) * 6.35029;
            return (value + " Stones" + "\n=\n" + result.toFixed(2) + " Kilograms");
        case 'ton-kg':
            result = parseFloat(value) * 907.185;
            return (value + " Tons" + "\n=\n" + result.toFixed(2) + " Kilograms");
        case 'yd-m':
            var result = parseFloat(value) / 1.09361;
            return (value + " Yards" + "\n=\n" + result.toFixed(2) + " Meters");
            
        default:
            return 'Invalid conversion type';
    }
}  
