var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favoriteStartups = [];
//var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));
var globalOutput = '';

function createNewStartup (){
	var random1 = Math.floor((Math.random() * startupX.length)); 
	var random2 = Math.floor((Math.random() * startupY.length)); 
	var output = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	var xForY = document.getElementById('xForY');
	xForY.innerHTML = output;
	globalOutput = output; 
	};	

function favoriteStartup (){
	favoriteStartups.push(globalOutput);
};

function printFavorite (){

};



document.getElementById('create').addEventListener('click', createNewStartup);
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
