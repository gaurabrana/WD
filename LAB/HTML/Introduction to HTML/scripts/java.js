const player=document.querySelector('p');
player.addEventListener('click', updateName);
function updateName(){
	let name = prompt('Enter a new name');
	player.textContent = 'Player 1: '+name;
}