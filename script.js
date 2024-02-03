const lengthSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll('.option input');
const copyItem = document.querySelector('.input-box span');
const passwordInput = document.querySelector(".input-box input");
const passIndıcator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn")

const characters = {
    lowercase:'qwertyuıopğüişlkjhgfdsazxcvbnmöç',
    uppercase: 'QWERTYUIOPĞÜİŞLKJHGFDSAZXCVBNMÖÇ',
    numbers: "0123456789",
    sybmbols: "!$%&[](){};:.,+*-@<>~|"
}
const generatePassword= ()=>{
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value; 
    options.forEach((option)=>{
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
            }
            else if(option.id == "spaces"){
                staticPassword += ` ${staticPassword}`
            }
            else{
                excludeDuplicate = true;
            }
        }
    });
    for(let i =0; i<passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random()*staticPassword.length)];
        if(excludeDuplicate){
            !randomPassword.includes(randomChar) || random == " "?(randomPassword += randomChar):i--;
        }else{
            randomPassword += randomChar
        }
    }
    passwordInput.value = randomPassword;
};
