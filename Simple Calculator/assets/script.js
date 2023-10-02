const inputfield = document.querySelector('input');
const all_buttons = document.querySelectorAll('button');
const all_buttons_arr = Array.from(all_buttons);
let cal_string = '';

all_buttons_arr.forEach((btn)=>{
	btn.addEventListener('click',(e)=>{
	  try{
		let button_target = e.target.innerHTML;
		if(button_target == 'Clear'){
			cal_string = '';
			inputfield.value = cal_string;
		}
		else if(button_target == '='){
			cal_string = eval(cal_string);
			inputfield.value = cal_string;
		}
		else{
			cal_string += button_target;
			inputfield.value = cal_string;
		}
	   }
	  catch(err){
		  alert('Invalid values please insert correct values')
	  }
	});
});

