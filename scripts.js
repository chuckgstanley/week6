/**
 * @author Peterphobia
 */

//Using previous template to pull json data
//from unemployment doc, 
//create a program that will pull the numbers
//from a fusion table:

//1. Open Scripts and HTML from last week
//2. Create Fusion Table from Unemployment Data
//3. Insert Fusion Table URL into Get function
//4. Comment out loop function, to disable
//5. Log console, to show that fusion data
// is displayed in console
//6. Use google fusion template to create new table
//7. Create line graph from table


//make sure html is pulling scripts from fusion table
//console.log("javascript working");

//create function with unemployment
//data under local name "Unemployment"

function mjsonLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(unemployment);
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = unemployment.columns;
	console.log(displayDataHeader);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	var mtable = new google.visualization.DataTable();
	mtable.addColumn('string', displayDataHeader[0]);
	mtable.addColumn('number', displayDataHeader[1]);
	mtable.addRows(unemployment.rows);
	
	//add title
	var chartOptions = {
		
		title: "Post-war Unemployment"
	};

	
	//Create a table to add data from "table"
	//var munmpDataTable = google.visualization.arrayToDataTable(mtable);


	// Draw the linegraph in html div "graph div"

	var munmpGraph = new google.visualization.LineChart(document.getElementById("munmpGraphDiv"));
	munmpGraph.draw(mtable)

	

}//end of jsonLoaded function

//build googleLoaded function
//with Unemployment file imported

function mchartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import Unemployment json file
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1-MVrEbZ5fxoEIEBU9_CDM4iUVLK8cqU1T067n3ly&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", mjsonLoaded, "json");
}//end chartLoaded function

function mpageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "mchartLoaded"


	});

}// end pageLoaded function

//load chart


// pageLoaded function
$(document).ready(mpageLoaded);