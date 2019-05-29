var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/ekans/');
ourRequest.onload = function() {
var ourdata = JSON.parse(ourRequest.responseText);
console.log(ourdata[0]);
};
ourRequest.send();
