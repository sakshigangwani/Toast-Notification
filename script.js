let toastBox = document.getElementById('toastBox');

let successMsg = '<i id="check" class="fa-solid fa-circle-check"></i> Successfuly submitted';
let errorMsg = '<i id="cross" class="fa-solid fa-circle-xmark"></i> Incorrect input';
let invalidMsg = '<i id="invalid" class="fa-solid fa-circle-exclamation"></i> Invalid input. Try again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);


    if (msg.includes('Incorrect')){
        toast.classList.add('error');
    }

    if (msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}