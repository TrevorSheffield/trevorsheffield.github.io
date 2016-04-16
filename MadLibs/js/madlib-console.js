var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

/*function createNewStartup (){
	var = xForY = document.getElementById('xForY').addEventListener()

	var newStartup = xForY.innerHTML = console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	console.log(newStartup);



function favoriteStartup (){

};

function printFavorite (){

};

*/

document.getElementById('create').addEventListener('click', function(createNewStartup){
	console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}); 
document.getElementById('save').addEventListener('click', favoriteStartup);
document.getElementById('print').addEventListener('click', printFavorite);


console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);



/*click create button
	event listener - check
	each new click needs to display new result

select random company name from array 1
	have array and randomizer
	how to create function to select a name?

and select random company name from array 2

display thhose values in a sentence on index.html
	use innerHTML on H1 with id of "xForY" */
