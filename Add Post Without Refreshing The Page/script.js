const ptitle = document.querySelector('.ptitle');
const pdesc = document.querySelector('.pdescription');
const addbtn = document.getElementById('addbtn');
const postcon = document.querySelector('.post-container');

const addpost = () => {
   pt_val = ptitle.value;
   pd_val = pdesc.value;

    if(pt_val == '' || pd_val == ''){

    }
    else{
        postcon.innerHTML += `
        <div class="post-body">
            <h3>${pt_val}</h3>
            <p>${pd_val}</p>
        </div>
        `
        pt_val.value = '';
        pd_val.value = '';
    }

}

addbtn.addEventListener('click', addpost);