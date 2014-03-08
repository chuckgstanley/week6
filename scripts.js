/**
 * @author Peterphobia
 */
//make sure html is pulling jscripts
console.log("javascript working");

//create dataLoaded function with unemployment
//data under local name "Unemployment"
//sub-catagorized into an array of relevant information
function jsonLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(unemployment);

	//Create arry of arrays to isolate dates and values from
	//unemployment data observations.
	//Loop "observations" from unemployment to sort dates and values
	//into "sortedData" then push to "displayData" to build chart
	//from

	// First make "observations" its own object.

	var observations = (unemployment.observations);
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = ["date", "value"];
	var displayData = [displayDataHeader];

	//Use a loop to populate "selectedData" with dates and value from
	//each observation in "unemployment."

	//begin for loop with starting point, ending point and
	//increment of observations to be counted
	for (var i = 0; i < observations.length; i++) {
		// define loopedObs as "i" of observations

		var loopedObs = observations[i];

		//arrange sorted dates and values from observations
		// into a new array called "sortedData"
		//convert "values" from strings to numbers
		var sortedData = [loopedObs.date, Number(loopedObs.value)];

		// send sortedData to displayData

		displayData.push(sortedData);
	}//End of loop

	// Log data from "displayData" to show function is working
	console.log(displayData);

	//Create a data table from "displayData"
	var unmpDataTable = google.visualization.arrayToDataTable(displayData);


	// Draw the linegraph in html div "graph div"

	var unmpGraph = new google.visualization.LineChart(document.getElementById("UnmpGraphDiv"));
	unmpGraph.draw(unmpDataTable)

	var options = {
			title: "Unemployment Since 1980"
	};


}//end of jsonLoaded function

//build googleLoaded function
//with Unemployment file imported

function chartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import Unemployment json file
	$.get("UEMP270V_data.json", jsonLoaded, "json");
}//end chartLoaded function

function pageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "chartLoaded"


	});

}// end pageLoaded function

//load chart


// pageLoaded function
$(document).ready(pageLoaded);