/**
 * #
 */

var cl;
var idx = 1;
function setUp() {
	coloursList.sort(sortByName);
	cl = $("#colourList");
	populateColourList();	
}

function sortByName(a, b) {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
}

function populateColourList() {
	for (var colour of coloursList) {
		cl.append($('<option></option>').val(colour.colour).html(colour.name)); 
	}	
}

function setColour(selector) {
	var selectedColour = cl.val();
	var selectedColourName = $("#colourList option:selected").text();
	$("#" + selector).css("background-color", selectedColour);
	$("#" + selector + "Label").text(selectedColourName);	
}

function copyColours() {
	var master = $("#master");
	
	$("<div id='combo" + idx++ + "' class='combo'>" + master.html() + "</div>").appendTo("body");
}

////
function sortByColour(a, b) {
	if (a.colour < b.colour) return -1;
	if (a.colour > b.colour) return 1;
	return 0;
}

function sortBySum(a, b) {
	var argb = rgbSum(hexToRgb(a.colour));
	var brgb = rgbSum(hexToRgb(b.colour));
	if (argb > brgb) return -1;
	if (argb < brgb) return 1;
	return 0;
}

function sortByLrv(a, b) {
	if (a.lrv > b.lrv) return -2;
	if (a.lrv < b.lrv) return 2;
	return sortBySum(a, b);
}

function sortByName(a, b) {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
}

function sortByRgb(a, b) {
	var argb = rgbPC(a.colour);
	var brgb = rgbPC(b.colour);
	if (argb[2] > brgb[2]) return 3;
	if (argb[2] < brgb[2]) return -3;
	if (argb[1] > brgb[1]) return 2;
	if (argb[1] < brgb[1]) return -2;
	if (argb[0] > brgb[0]) return 1;
	if (argb[0] < brgb[0]) return -1;
	return 0;
}

function drawColours(colours) {
	var sortBy = $('input[name=sortBy]:checked').val();
	if (sortBy == "nameSort") {
		colours.sort(sortByName);
	} else if (sortBy == "lrvSort") {
		colours.sort(sortByLrv);
	} else {
		colours.sort(sortBySum);
	}
	
	for (var colour of colours) {
		drawColour(colour);
	}
}

function drawAll() {
	drawColours(coloursList);
}
function drawShortlist() {
	drawColours(coloursList.filter(isShortlist));
}
function drawMixers	() {
	drawColours(coloursList.filter(isMixer));
}
function drawReds() {
	drawColours(coloursList.filter(isRed));
}
function drawGreens() {
	drawColours(coloursList.filter(isGreen));
}
function drawBlues() {
	drawColours(coloursList.filter(isBlue));
}

function isShortlist(colour) {
	return (colour.shortlist >= 2 && colour.vendor == "littlegreene");
}
function isMixer(colour) {
	return (colour.shortlist == 1);
}
function isRed(colour) {
	var rgb = hexToRgb(colour.colour);
	return (rgb[0] >= rgb[1] && rgb[0] >= rgb[2]);
}
function isGreen(colour) {
	var rgb = hexToRgb(colour.colour);
	return (rgb[1] >= rgb[0] && rgb[1] >= rgb[2]);
}
function isBlue(colour) {
	var rgb = hexToRgb(colour.colour);
	return (rgb[2] >= rgb[0] && rgb[2] >= rgb[1]);
}

function hexToRgb(hex) {
	var r = toDec(hex.substring(1, 3));
	var g = toDec(hex.substring(3, 5));
	var b = toDec(hex.substring(5, 7));
	return [r, g, b];
} 
function rgbSum(rgb) {
	return rgb[0]+rgb[1]+rgb[2];
}
function rgbPC(hex) {
	var rgb = hexToRgb(hex);
	var sum = rgbSum(rgb);
	return [pc(rgb[0], sum), pc(rgb[1], sum), pc(rgb[2], sum)];
}
function rgbPCLabel(hex) {
	var pc = rgbPC(hex);
	return hexToRgb(hex) + " " + pc[0] + "," + pc[1]  + "," + pc[2];
}
function pc(a, b) {
	return Math.round(a*100/b);
}

function clearColours() {
	var master = $("#master")
	master.empty();
}

function drawColour(colour) {
	var name = "colour" + idx++;
	var swatch = "<div id='" + name + "' class='swatch'><div id='"
	+ name + "Label' class='colourLabel'></div></div>";
	$(swatch).appendTo("#master");
	$("#" + name).css("background-color", colour.colour);
	$("#" + name + "Label").text(colour.lrv + " " + colour.name);
}

function doThing() {
	//alert($("#colour1").css("background-color"));
	var test = "#ffee12";
	var r = toDec(test.substring(1, 3));
	var g = toDec(test.substring(3, 5));
	var b = toDec(test.substring(5, 7));
	var rgb = hexToRgb(test);
	alert(rgb + " " + rgbSum(rgb));
	
}

function toDec(val) {
	return parseInt(val, 16);
}