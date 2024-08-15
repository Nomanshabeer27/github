const inputfield = document.querySelector('#passward');
const outputfield = document.querySelector('#output');

inputfield.addEventListener("input",()=>{
    console.log(inputfield.value);
    let passward = inputfield.value;
    if (passward.length <10) {
        outputfield.innerHTML="Passward is too short"
        outputfield.style.color = 'red'
    }else{
        outputfield.innerHTML="Passward is too longer"
        outputfield.style.color = 'green'
    
        console.log(passward.search(/[a-z]/));
        
        if(passward.search(/[a-z]/)==-1){
            outputfield.innerHTML = 'Passward is missing lowercse letter';
            outputfield.style.color = 'red'
        }else if(passward.search(/[A-Z]/)==-1){
            outputfield.innerHTML = 'Passward is missing uppercase letter';
            outputfield.style.color = 'red';
        }
        else if(passward.search(/[0-9]/)==-1){
            outputfield.innerHTML = 'Passward is Nmaric letter';
            outputfield.style.color = 'red';
        }
        else if(passward.search(/[!\@\#\$\%\^\&\>]/)==-1){
            outputfield.innerHTML = 'Passward is spacial letter';
            outputfield.style.color = 'red';
        }
        
    }    
})
