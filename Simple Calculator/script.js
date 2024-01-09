const input = document.getElementById('calinput');
const buttons = document.querySelectorAll('button');
const arrbtn = Array.from(buttons);

arrbtn.forEach((btn, index) => {
    btn.addEventListener('click', function(e){
        const btnval = e.target.value;

        switch(btnval){
            case '=':
            try{
                input.value = eval(input.value);
            }catch(error){
                window.alert('Error');
            }
            break;
            case 'clear':
                input.value = '';
            break;    
            case 'delete':
                input.value = input.value.slice(0,-1);
            break;    
            default:
                input.value += btnval;
        }
    });
})