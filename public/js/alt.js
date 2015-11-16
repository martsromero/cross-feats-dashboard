	var data = {
	    labels: ["Back Squat", "Deadlift", "Snatch", "Clean & Jerk"],
	    datasets: [
	        {
	            label: "Personal Record",
	            fillColor: "rgba(217,30,24,0.5)",
	            strokeColor: "rgba(217,30,24,1)",
	            highlightFill: "rgba(217,30,24,1)",
	            highlightStroke: "rgba(217,30,24,1)",
	            data: [285,431,272,480,254]
	        },    
	        {
	            label: "Regionals Men's Average",
	            fillColor: "rgba(107,185,240,0.5)",
	            strokeColor: "rgba(107,185,240,1)",
	            highlightFill: "rgba(107,185,240,1)",
	            highlightStroke: "rgba(107,185,240,1)",
	            data: [375,499,321,540,310]
	        },  
	        {
	            label: "Regionals Women's Average",
	            fillColor: "rgba(30,130,76,0.5)",
	            strokeColor: "rgba(30,130,76,1)",
	            highlightFill: "rgba(30,130,76,1)",
	            highlightStroke: "rgba(30,130,76,1)",
	            data: [155,256,161,300,187]
	        },    
	        {
	            label: "Ben Smith",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            highlightFill: "rgba(247,202,24,1)",
	            highlightStroke: "rgba(247,202,24,1)",
	            data: [185,318,203,335,216]
	        },  
	     {
	            label: "Katrinb",
	            fillColor: "rgba(247,202,24,0.5)",
	            strokeColor: "rgba(247,202,24,1)",
	            highlightFill: "rgba(247,202,24,1)",
	            highlightStroke: "rgba(247,202,24,1)",
	            data: [185,318,203,335,216]
	        }, 
	    ],

	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
	      
	};