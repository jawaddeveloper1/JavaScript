const colorc = document.querySelector('h3');
const gbtn = document.querySelector('.generatebtn');

gbtn.addEventListener('click', getcolor);

function getcolor(){
    const c1 = Math.floor(Math.random()*255);
    const c2 = Math.floor(Math.random()*255);
    const c3 = Math.floor(Math.random()*255);

    const randcode = `rgb(${c1}, ${c2}, ${c3})`;

    document.body.style.backgroundColor = randcode;
    colorc.innerHTML = randcode;
    colorc.style.color = randcode;
    gbtn.style.border = `2px solid ${randcode}`;
}

getcolor();