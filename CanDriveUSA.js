function CanIDrive(){
	var ageElement = document.getElementbyId("age");
	var age = ageElement.value;
	var result = document.getElementbyId("result")
	if (age < 15) {
	console.log("You can't do anything fun!")
		} else if (age === 15) {
			result.innerHTML = "At the age of 15, you are only legally permitted to get a driver's permit, which allows you to drive with adult supervision."
		} else if (age >= 16 && age < 21) {
			result.innerHTML = "At the age of 16, you are only legally permitted to drive without adult supervision."
		} else if (age >= 21 && age < 25) {
			result.innerHTML = "At the age of 21, you are only allowed to legally drink or drive without adult supervision (but not at the same time)."
		} else if (age >= 25) {
			result.innerHTML = "At the age of 25, you are only allowed to legally drink, drive without supervision or rent a car. Of course, you cannot drink and drive at the same time."
		}
	
}


document.getElementbyId('GetAgeInput').addEventListener('click', CanIDrive);
btnDrive.addEventListener('click', CanIDrive);
