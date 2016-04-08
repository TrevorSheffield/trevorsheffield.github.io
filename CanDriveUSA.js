function CanIDrive(){
	var ageElement = document.getElementbyId("age");
	var age = ageElement.value;
	var result = document.getElementbyId("results");
	if (age < 15) {
	results.innerHTML("You can't do anything fun!");
		} 
};


document.getElementbyId('ageElement').addEventListener('click', CanIDrive);
btnDrive.addEventListener('click', CanIDrive);
