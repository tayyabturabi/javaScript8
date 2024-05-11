


function generatePassword (){


var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?,./;:{}[]|";

var passwordLength = document.getElementById('chrRange').value;

var generatedPassword = "";

for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
}

document.getElementById('passwordInput').value = generatedPassword;

}

generatePassword();



//=====================================//===========================================//


// var alphaCheckBox = document.getElementById('alpha');
// var alphavlue;

// alphaCheckBox.addEventListener('change', function(){
//     if (this.checked) {
//         alphavlue = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         console.log("Checkbox is checked");

//     } else {
//         alphavlue = ""; 
//         console.log("Checkbox is unchecked");
//     }

//     console.log("Current value of alphavlue:", alphavlue);
// });








    // var getAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var getSpecChr = "!@#$%^&*()_+<>?,./;:{}[]|";
    // var getNum = "0123456789";