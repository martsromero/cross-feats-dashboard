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
	      buildBacksquatChart();
		buildDeadliftChart();
		buildActiveChart();
		buildDayChart();
	     

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
buildBacksquatChart();
buildDeadliftChart();
buildActiveChart();
buildDayChart();


function buildLineChart(){
	
	var data = {
	    labels: ["Philippine PR", "Apr '15", "May '15"],
	    datasets: [
	        {
	            label: "",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            pointColor: "rgba(247,202,24,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(247,202,24,1)",
	            data: [165,150, 185]
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
		pointDotRadius :5,
		responsive: true,
		maintainAspectRatio: true,
		
	}

	var ctx = document.getElementById("lineChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}

function buildSnatchChart(){
	
	var data = {
	    labels: ["Philippine PR", "May '15", "Early Sep '15", "Late Sep '15", "Early Oct '15", "Late Oct '15"],
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
		pointDotRadius :5,
		responsive: true,
		maintainAspectRatio: true,
		
	}

	var ctx = document.getElementById("snatchChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}


function buildBacksquatChart(){
	
	var data = {
	    labels: ["Philippine PR", "Nov '14", "Feb '15", "Early Apr '15", " Late Apr '15", "May '15", "June '15"],
	    datasets: [
	        {
	            label: "",
	            fillColor: "rgba(217,30,24,0.5)",
	            strokeColor: "rgba(217,30,24,1)",
	            pointColor: "rgba(217,30,24,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(217,30,24,1)",
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
		pointDotRadius :5,
		responsive: true,
		maintainAspectRatio: true,
		
	}

	var ctx = document.getElementById("backsquatChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}

function buildDeadliftChart(){
	
	var data = {
	    labels: ["Ph PR", "Early June '15", "Late June '15", "July '15"],
	    datasets: [
	        {
	            label: "",
	            fillColor: "rgba(107,185,240,0.5)",
	            strokeColor: "rgba(107,185,240,1)",
	            pointColor: "rgba(107,185,240,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(107,185,240,1)",
	            data: [335, 315, 335, 375]
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
		pointDotRadius :5,
		responsive: true,
		maintainAspectRatio: true,
		
	}

	var ctx = document.getElementById("deadliftChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}

function buildPrChart(){
	
	var data = {
	    labels: ["Back Squat", "Deadlift", "Snatch", "Clean & Jerk"],
	    datasets: [
	        {
	            label: "Personal Record",
	            fillColor: "rgba(217,30,24,0.5)",
	            strokeColor: "rgba(217,30,24,1)",
	            highlightFill: "rgba(217,30,24,1)",
	            highlightStroke: "rgba(217,30,24,1)",
	            data: [285,375,155,185]
	        },    
	        {
	            label: "Regionals Men's Average",
	            fillColor: "rgba(107,185,240,0.5)",
	            strokeColor: "rgba(107,185,240,1)",
	            highlightFill: "rgba(107,185,240,1)",
	            highlightStroke: "rgba(107,185,240,1)",
	            data: [445,530,276,333]
	        },  
	        {
	            label: "Regionals Women's Average",
	            fillColor: "rgba(30,130,76,0.5)",
	            strokeColor: "rgba(30,130,76,1)",
	            highlightFill: "rgba(30,130,76,1)",
	            highlightStroke: "rgba(30,130,76,1)",
	            data: [277,340,162,205]
	        },    
	        {
	            label: "Ben Smith",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            highlightFill: "rgba(247,202,24,1)",
	            highlightStroke: "rgba(247,202,24,1)",
	            data: [480,540,300,335]
	        },  
	     {
	            label: "Katrin",
	            fillColor: "rgba(211,84,0,0.5)",
	            strokeColor: "rgba(211,84,0,1)",
	            highlightFill: "rgba(211,84,0,1)",
	            highlightStroke: "rgba(211,84,0,1)",
	            data: [254,310,187,216]
	        }, 
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

    responsive: true,
	maintainAspectRatio: true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		
	}

	var ctx = document.getElementById("prChart").getContext("2d");

	var myBarChart = new Chart(ctx).Bar(data, options);
	
	var barLegend = myBarChart.generateLegend();
	
	$('#barChartLegend').append(barLegend);
}

function buildActiveChart(){
	
	var data = {
		    labels: ["October 20,'14", "November '14", "December '14", "January '15", "February '15", "March '15", "April '15", "May '15", "June '15", "July '15", "August '15", "September '15", "October '15", "November 9, 2015"],
		    datasets: [
		        {
		            label: "",
		            fillColor: "rgba(46,204,113,0.5)",
		            strokeColor: "rgba(247,202,24,1)",
		            pointColor: "rgba(247,202,24,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(247,202,24,1)",
		            data: [8,13,12,3,14,14,24,19,17,8,4,16,16,4]
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
		pointDotRadius :5,
		responsive: true,
		maintainAspectRatio: true,
		
	}

	var ctx = document.getElementById("activeChart").getContext("2d");
	
	var myLineChart = new Chart(ctx).Line(data, options);	
	
	// var chartLegend = myLineChart.generateLegend();
	
	// $('#lineChartLegend').append(chartLegend);
}

function buildDayChart(){

	var data = [
	    {
	        value: 35,
	        color:"rgba(217,30,24,0.5)",
	        highlight: "rgba(217,30,24,1)",
	        label: "Monday"
	    },
	    {
	        value: 36,
	        color: "rgba(211,84,0,0.5)",
	        highlight: "rgba(211,84,0,1)",
	        label: "Tuesday"
	    },
	    {
	        value: 23,
	        color: "rgba(247,202,24,0.5)",
	        highlight: "rgba(247,202,24,1)",
	        label: "Wednesday"
	    },
	    {
	        value: 31,
	        color: "rgba(46,204,113,0.5)",
	        highlight: "rgba(46,204,113,1)",
	        label: "Thursday"
	    },
	    {
	        value: 32,
	        color: "rgba(107,185,240,0.5)",
	        highlight: "rgba(107,185,240,1)",
	        label: "Friday"
	    },
	    {
	        value: 27,
	        color: "rgba(31,58,147,0.5)",
	        highlight: "rgba(31,58,147,1)",
	        label: "Saturday"
	    },
	    {
	        value: 1,
	        color: "rgba(145,61,136,0.5)",
	        highlight: "rgba(145,61,136,1)",
	        label: "Sunday"
	    },

	]

var options = {
		
		    //Boolean - Show a backdrop to the scale label
		       scaleShowLabelBackdrop : false,

		       //String - The colour of the label backdrop
		       // scaleBackdropColor : "rgba(255,255,255,0.75)",

		       // Boolean - Whether the scale should begin at zero
		       scaleBeginAtZero : true,

		       //Number - The backdrop padding above & below the label in pixels
		       scaleBackdropPaddingY : 2,

		       //Number - The backdrop padding to the side of the label in pixels
		       scaleBackdropPaddingX : 2,

		       //Boolean - Show line for each value in the scale
		       scaleShowLine : false,

		       //Boolean - Stroke a line around each segment in the chart
		       // segmentShowStroke : true,

		       //String - The colour of the stroke on each segement.
		       // segmentStrokeColor : "#fff",

		       //Number - The width of the stroke value in pixels
		       segmentStrokeWidth : .01,

		       //Number - Amount of animation steps
		       animationSteps : 80,

		       //String - Animation easing effect.
		       animationEasing : "easeOutBounce",

		       //Boolean - Whether to animate the rotation of the chart
		       animateRotate : true,

		       //Boolean - Whether to animate scaling the chart from the centre
		       animateScale : true,
	}

	var ctx = document.getElementById("dayChart").getContext("2d");

	var myPolarAreaChart = new Chart(ctx).PolarArea(data,options);
}

	

	