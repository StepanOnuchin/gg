
let openPopUp = document.getElementById('open_pop_up');
let closePopUp = document.getElementById('close_pop_upp');
let popUp = document.getElementById('pop_up');
let popUpBg = document.querySelector('.pop_up_container');

openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})
closePopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.remove('active');
})
document.addEventListener('click', (e) => {
	if(e.target === popUpBg) {
		popUp.classList.remove('active');
	}
})

