function CanIDrive(){
	var ageElement = document.getElementById("age");
	var age = ageElement.value;
	var results= document.getElementById("results");
	if (age < 15) {
	results.innerHTML("You can't do anything fun!");
		} 
};


document.getElementById('ageElement').addEventListener('click', CanIDrive);
