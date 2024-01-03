const nameinput = document.getElementById('name');
const ageinput = document.getElementById('age');
const submitbtn = document.getElementById('submitbtn'); 
const tophead = document.querySelector('.top-head h1');
const lt10content = document.querySelector('.less-than-ten-content');
const etecontent = document.querySelector('.eleven-to-eighteen-content');
const mtecontent = document.querySelector('.more-than-eighteen-content');

submitbtn.addEventListener('click', function(){
	const nameinput_val = nameinput.value;
	const ageinput_val = ageinput.value;
	tophead.style.display = 'none';
	lt10content.style.display = 'none';
	etecontent.style.display = 'none';
	mtecontent.style.display = 'none';
	
	if(nameinput_val == ''){
		window.alert("Fill out name field");
	}
	else if(ageinput_val == ''){
		window.alert("Fill out age field");
	}
	else if(ageinput_val <= 10 ){
		tophead.style.display = 'block';
		tophead.innerHTML = `Hello, ${nameinput_val}`;
		lt10content.style.display = 'block';
		etecontent.style.display = 'none';
		mtecontent.style.display = 'none';
	}
	else if(ageinput_val >= 11 && ageinput_val <= 18 ){
		tophead.style.display = 'block';
		tophead.innerHTML = `Hello, ${nameinput_val}`;
		lt10content.style.display = 'none';
		etecontent.style.display = 'block';
		mtecontent.style.display = 'none';
	}
	else{
		tophead.style.display = 'block';
		tophead.innerHTML = `Hello, ${nameinput_val}`;
		lt10content.style.display = 'none';
		etecontent.style.display = 'none';
		mtecontent.style.display = 'block';
	}
});
