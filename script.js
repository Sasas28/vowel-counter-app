//When typing in field
document.querySelector('#myInput').addEventListener('keyup', e => {
  //get the value
  let text = e.target.value.toUpperCase();
  //convert string into array
  text = text.split("");
  //reset to zero
  document.querySelector('#counter').innerText = 0;
  //loop 
  text.forEach(char => {
    if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
     let counter = document.querySelector('#counter').innerText;
     document.querySelector('#counter').innerText = parseInt(counter) + 1;
    }
  });
  
});