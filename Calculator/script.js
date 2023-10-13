let screen=document.querySelector('#screen');
let btn=document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

document.oninput = function() {
    let input = document.querySelector('.input-0');
    input.value = input.value.replace (/[^\+\-\/\*\.\d]/g, '');
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}

let input = document.getElementById("screen");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("eval").click();
    }
});