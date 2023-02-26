var button = document.getElementById('button');
var inputEmail = document.getElementById('inputEmail');
var errorIconImg = document.getElementById('errorIconImg');
var errorMessage = document.getElementById('errorMessage');

function sendEmail(){
	if(inputEmail.value == "Email Address"){
		errorFunction();
	}
	else {
		if(validatorEmail(inputEmail.value) != true){
			errorFunction();			
		}
		else {
			successFunction();
		}
	}
}

inputEmail.addEventListener("click", () => {
	restartInput();
})

function validatorEmail(email) {
	let emailPattern =
	  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	return emailPattern.test(email);
  }

function errorFunction () {
	button.classList.add("error_button");
	inputEmail.classList.add("error_input");
	errorIconImg.classList.add("error_icon_img");
	errorMessage.classList.add("show_error_message");
	errorMessage.innerHTML = "Please provide a valid email";
}

function restartInput () {
	inputEmail.value = "";
	inputEmail.classList.remove("error_input");
	button.classList.remove("error_button");
	inputEmail.classList.remove("error_input");
	errorIconImg.classList.remove("error_icon_img");
	errorMessage.classList.remove("show_error_message");
	errorMessage.classList.remove("show_success_message");
}

function successFunction () {
	errorMessage.classList.add("show_success_message");
	errorMessage.innerHTML = "Email registered successfully";
}