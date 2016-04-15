var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

function madlib() {
var createButton = document.getElementById('create');
var saveButton = document.getElementById('save');
var printButton = document.getElementById('print');

};

document.getElementById('create').addEventListener('click', create);
document.getElementById('save').addEventListener('click', save);
document.getElementById('print').addEventListener('click', print);


console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);