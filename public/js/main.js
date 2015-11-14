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
	    labels: ["Philippine PR", "Nov 2014", "Feb 2015", "March 2015", "Early April 2015", " Late April 2015", "Early May 2015", "Late May 2015", "Early June 2015", "Late June 2015"],
	    datasets: [
	        {
	            label: "Clean & Jerk in lbs.",
	            fillColor: "rgba(107,185,240,0.2)",
	            strokeColor: "rgba(107,185,240,1)",
	            pointColor: "rgba(107,185,240,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(107,185,240,1)",
	            data: [235,195,225,215,210, 255, 230,275, 285, 280]
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