var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

function createNewStartup (){
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));
	

};

function favoriteStartup (){

};

function printFavorite (){

};

document.getElementById('create').addEventListener('click', createNewStartup);
document.getElementById('save').addEventListener('click', favoriteStartup);
document.getElementById('print').addEventListener('click', printFavorite);


console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);