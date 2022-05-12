let reg= document.querySelector(".reg");
let form= document.querySelector(".rang");
let cancel= document.querySelector(".cancel");

console.log(cancel);
console.log(reg);

reg.addEventListener('click', ()=>{
    form.style.display='block';
    cancel.style.display='block';
    reg.style.display='none';
});
cancel.addEventListener('click', ()=>{
    form.style.display='none';
    reg.style.display='block';
    cancel.style.display='none';
});