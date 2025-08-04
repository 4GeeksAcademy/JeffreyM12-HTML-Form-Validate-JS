// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  const creditCard = document.querySelector('#cardNumber')
  const cvcNumber = document.querySelector('#cvcNumber')
  const amountNumber = document.querySelector('#dollarAmount')
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')
  const cityName = document.querySelector('#cityName')
  const stateName = document.querySelector('#stateName')
  const postalNumber = document.querySelector('#postalNumber')
  const messageBox = document.querySelector('#messageBox')
  const errorMessage = document.querySelectorAll('.invalid-feedback')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    console.log(errorMessage)
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      if (!creditCard || creditCard.value.length != 16){
        errorMessage[0].style.display = "block"
      }
      if(!cvcNumber || cvcNumber.value.length != 3){
        errorMessage[1].style.display = "block"
      }
      if (!amountNumber || isNaN(amountNumber) || parseFloat(amountNumber) <= 0){
        errorMessage[2].style.display = "block"
      }
      if(!firstName || firstName.length < 2 || !(/^[a-zA-Z\s'-]+$/.test(firstName))){
        errorMessage[3].style.display = "block"
      }
      if(!lastName || lastName.length < 2 || !(/^[a-zA-Z\s'-]+$/.test(lastName))){
        errorMessage[4].style.display = "block"
      }
      if(!cityName || !(/^[a-zA-Z\s'-]+$/.test(cityName))){
        errorMessage[5].style.display = "block"
      }
      if(!stateName || stateName === "Pick a State"){
        errorMessage[6].style.display = "block"
      }
      if(!postalNumber || postalNumber.value.length != 5){
        errorMessage[7].style.display = "block"
      }
      if(!messageBox){
        errorMessage[9].style.display = "block"
      }

      form.classList.add('was-validated')
    }, false)
  })

  const submit = document.querySelectorAll('#submit')
  console.log(submit)


  console.log("Hello Rigo from the console!");
};