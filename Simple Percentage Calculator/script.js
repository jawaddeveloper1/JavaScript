function spc_function(){

  event.preventDefault()
  const obtained = document.getElementById('obtained')
  const total = document.getElementById('total')
  const finalres = document.getElementById('finalres')

  if(obtained.value !== '' && total.value !== ''){
     finalres.innerHTML = 'Percentage: '+obtained.value/total.value*100+'%'
  }
  else{
     finalres.innerHTML = 'Please fill up both fields'
  }
  
}