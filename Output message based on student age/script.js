function clickfunction(){

  event.preventDefault()
  const std_name = document.getElementById('stdname')
  const std_age = document.getElementById('stdage')
  const message = document.getElementById('message')

  if(std_age.value !== ''){
   if(std_age.value < 20){
     message.innerHTML = `Student name is ${std_name.value} & age less than 20`
   }
  else if(std_age.value > 20){
     message.innerHTML = `Student name is ${std_name.value} & age greator than 20`
   }
  else{
     message.innerHTML = `Student name is ${std_name.value} & age is 20`
   }
  }
  else{
   alert('Please fill up both fields')
  }
  
}