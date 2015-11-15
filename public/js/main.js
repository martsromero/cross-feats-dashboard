// CUSTOM JS FILE //

var datajson;

window.addEventListener('onload',init());
function init(){

	buildEventListener();	

	// GET REQUEST
	$.ajax({
	    url: 'data/data.json',
	    type: 'GET',
	    failure: function(err){
	        // what to do on failure
	        // generally, handle the error
	        console.log ("There was an issue getting the data");
	    },
	    success: function(response) {
	        // what to do on success
	        console.log(response);
	        datajson = response;
	        console.log('here');
	      buildDoughnutChart(response.candidates);
	      buildLineChart();
	      filterData(response.candidates);
	      buildSnatchChart();
	      buildPrChart();
	     

	    }
	});

}


function init() {
  renderPeeps();
}

function renderPeeps(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);

			var pr = response.pr;

			for(var i=0;i<pr.length;i++){
				var htmlToAdd = '<div class="col-md-4">'+
					'<img src='+pr[i].imageUrl+' width="100">'+
					'<h1>'+pr[i].record+'</h1>'+
					'<h1>'+pr[i].lift+'</h1>'+
					
				'</div>';
			
				jQuery("#pr-holder").append(htmlToAdd);
			}



		}
	})	
}

buildLineChart();
buildSnatchChart();
buildPrChart();

function buildLineChart(){
	
	var data = {
	    labels: ["Ph PR", "Nov '14", "Feb '15", "Early Apr '15", " Late Apr '15", "Late May '15", "Early June '15"],
	    datasets: [
	        {
	            label: "",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            pointColor: "rgba(247,202,24,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(247,202,24,1)",
	            data: [235,195,225,210, 255,275, 285]
	        },    
	    /***     {
	            label: "Other candidates",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [40,46,41,23,19]
	        } ***/
	    ],
	      
	};	

	var options = {
		datasetStroke : true,
		datasetFill : true,
		pointDotRadius :5
		
	}

	var ctx = document.getElementById("lineChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}

function buildSnatchChart(){
	
	var data = {
	    labels: ["Ph PR", "May '15", "Early Sep '15", "Late Sep '15", "Early Oct '15", "Late Oct '15"],
	    datasets: [
	        {
	            label: "",
	            fillColor: "rgba(30,130,76,0.5)",
	            strokeColor: "rgba(30,130,76,1)",
	            pointColor: "rgba(30,130,76,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(30,130,76,1)",
	            data: [125, 115, 105, 135, 145, 155]
	        },    
	    /***     {
	            label: "Other candidates",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [40,46,41,23,19]
	        } ***/
	    ],
	};	

	var options = {
		datasetStroke : true,
		datasetFill : true,
		pointDotRadius :5
		
	}

	var ctx = document.getElementById("snatchChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}



function buildPrChart(){
	
	var data = {
	    labels: ["Philippine PR", "US PR", "Male CF Average", "Female CF Average", "Ben Smith", "Katrin Davidsdottir"],
	    datasets: [
	        {
	            label: "Back Squat",
	            fillColor: "rgba(217,30,24,0.5)",
	            strokeColor: "rgba(217,30,24,1)",
	            highlightFill: "rgba(217,30,24,1)",
	            highlightStroke: "rgba(217,30,24,1)",
	            data: [235,285,445,277,480,254]
	        },    
	        {
	            label: "Deadlift",
	            fillColor: "rgba(107,185,240,0.5)",
	            strokeColor: "rgba(107,185,240,1)",
	            highlightFill: "rgba(107,185,240,1)",
	            highlightStroke: "rgba(107,185,240,1)",
	            data: [335,375,530,340,540,310]
	        },  
	        {
	            label: "Snatch",
	            fillColor: "rgba(30,130,76,0.5)",
	            strokeColor: "rgba(30,130,76,1)",
	            highlightFill: "rgba(30,130,76,1)",
	            highlightStroke: "rgba(30,130,76,1)",
	            data: [125,155,276,162,300,187]
	        },    
	        {
	            label: "Clean & Jerk",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            highlightFill: "rgba(247,202,24,1)",
	            highlightStroke: "rgba(247,202,24,1)",
	            data: [165,185,333,205,335,216]
	        },  
	    /***     {
	            label: "Other candidates",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [40,46,41,23,19]
	        } ***/
	    ],

	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
	      
	};	

	var options = {
	//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : false,

    // //String - Colour of the grid lines
    // scaleGridLineColor : "rgba(0,0,0,.05)",

    // //Number - Width of the grid lines
    // scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 3,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 80,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 3,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		
	}

	var ctx = document.getElementById("prChart").getContext("2d");

	var myBarChart = new Chart(ctx).Bar(data, options);
	
	var barLegend = myBarChart.generateLegend();
	
	$('#barChartLegend').append(barLegend);
}