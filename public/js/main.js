// CUSTOM JS FILE //

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


window.addEventListener('load', init())