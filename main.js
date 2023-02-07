const eye = document.querySelector('.eye')
const PasNew = document.querySelector('#PasNew')
const wordControl = document.querySelector('#wordControl')
const passwordControl = document.querySelector('#passwordControl')
const simbolControl = document.querySelector('#simbolControl')
const form = document.querySelector('#form')
const pasCopy = document.querySelector('#passwordCopy')

eye.addEventListener('click', function(){
    eye.classList.toggle('open')
    if(PasNew.type === 'text'){
        PasNew.type = 'password'
    } else {
        PasNew.type = 'text'
                console.log(simbolControl.nextElementSibling.style.borderBottom)
    }
})

function controlePasLength(event){
    if(PasNew.value.length > 5){
        simbolControl.style.display = 'none'
        simbolControl.previousElementSibling.style.borderBottom = '1px solid rgba(43, 104, 155, 1)'
    } else{
        event.preventDefault()
        simbolControl.style.display='block'
        simbolControl.previousElementSibling.style.borderBottom = '1px solid rgba(255, 182, 193, 1)'
    }
}

function controlePas(event){
    if(PasNew.value !== pasCopy.value){
        event.preventDefault()
        passwordControl.style.display = 'block'
        passwordControl.previousElementSibling.style.borderBottom = '1px solid rgba(255, 182, 193, 1)'
    }  else {
        passwordControl.style.display = 'none'
        passwordControl.previousElementSibling.style.borderBottom = '1px solid rgba(43, 104, 155, 1)'
    }
}


form.addEventListener('submit', function(event){
    controlePasLength(event)
    controlePas(event)
})