const board = document.getElementById('board');
// const squares = document.getElementsByTagName('td')
const squares = $('td');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

// console.log(one);

$(squares).on('click', function(event){
	
	$(this).toggleClass('cross', 'circle');
});