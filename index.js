window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let loweCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let upperCaseLeters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numberCharacters = "0123456789".split('')
  let specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~".split('')
  document.addEventListener("submit", (event) => {
    event.preventDefault()
    let input = document.getElementById("passwordlength")
    let passwordLength = input.value 
    //console.log(specialCharacters)
    if (passwordLength < 4){
      passwordLength = 4
    }
    let newPassword = ""
    let 
    for (let i=0; i< passwordLength; i++){
      
    }
  })
});
