let inpt = document.getElementById('input');
let btn = document.getElementById('btn');
let givenNum = 50;


btn.addEventListener('click', ()=>{
let num = inpt.value;
compare(num);
})


function compare(num){
if (num>givenNum){
alert('Your number is greater than the actual number!!');
}
else if(num<givenNum){
    alert('Your number is smaller than the actual number!!');
}
else{
    alert('COngrajulations!! You won!! Hurraayy.....')
}
}