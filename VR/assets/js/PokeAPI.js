$(function(){
	var data;
	var dataString;



		//events
		document.getElementById('information-player-side').addEventListener('mouseenter',function()
		{

			getData(this);

			$(this).attr('scale','0.8 0.8 0.8');
			console.log('hover');

		});

		document.getElementById('information-player-side').addEventListener('mouseleave',function()
		{
			$(this).attr('scale','0.5 0.5 0.5');
		});


	function getData(data)
	{
		switch (data.id)
		{
			case "information-player-side":
					dataString = $(data).attr('data')

			break;
		}

			console.log(dataString);
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/' + dataString,
			method: 'GET', // or GET
			dataType : "json",
			success: function(msg) {
				var x = msg['name'] !== undefined ? msg['name'] : msg['name'];
				var z = msg['height'];
				var y = msg['weight'];

				$('#name').attr('text','text: Name: ' + x );
				$('#height').attr('text','text: Height: ' + z + ' DM');
				$('#weight').attr('text','text: Weight: ' + y + ' KG');
				$('#information-player-side').attr('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ dataString + '.png');


			}
		});
	}

});
