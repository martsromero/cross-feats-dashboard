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

function buildLineChart(){
	
	var data = {
	    labels: ["June 24 to July 2, 2014", "September 8 to 14, 2014", "March 1 to 7, 2015", "May 30 to June 5, 2015", "September 8 to 14, 2015"],
	    datasets: [
	        {
	            label: "Grace Poe",
	            fillColor: "rgba(107,185,240,0.2)",
	            strokeColor: "rgba(107,185,240,1)",
	            pointColor: "rgba(107,185,240,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(107,185,240,1)",
	            data: [12,10,14,30,26]
	        },
	        {
	            label: "Mar Roxas",
	            fillColor: "rgba(247,202,24,0.2)",
	            strokeColor: "rgba(247,202,24,1)",
	            pointColor: "rgba(247,202,24,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(247,202,24,1)",
	            data: [7,13,4,10,20]
	        },
	        {
	            label: "Jojo Binay",
	            fillColor: "rgba(211,84,0,0.2)",
	            strokeColor: "rgba(211,84,0,1)",
	            pointColor: "rgba(211,84,0,1)",
	            pointStrokeColor: "#D35400",
	            pointHighlightFill: "#D35400",
	            pointHighlightStroke: "rgba(211,84,0,1)",
	            data: [41,31,29,22,19]
	        },
	         {
	            label: "Rody Duterte",
	            fillColor: "rgba(150,40,27,0.2)",
	            strokeColor: "rgba(150,40,27,1)",
	            pointColor: "rgba(150,40,27,1)",
	            pointStrokeColor: "#E74C3C",
	            pointHighlightFill: "#E74C3C",
	            pointHighlightStroke: "rgba(150,40,27,1)",
	            data: [0,0,12,15,16]
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
	
	var chartLegend = myLineChart.generateLegend();
	
	$('#lineChartLegend').append(chartLegend);
}