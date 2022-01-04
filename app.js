 
 // <====================== Age calculator ======================>

 const  name   = document.querySelector('#name');
 const  year   = document.querySelector('#year');
 const  button = document.querySelector('#button');
 const  output = document.querySelector('#output');

 
 button.addEventListener('click',function(){

   output.innerHTML =  agecal(name.value,year.value);
   name.value = '';
   year.value = '';
     
 });



 //<======================= Marrige calculator==========================>

const agebtn = document.querySelector('#agebtn');
const result = document.querySelector('#result');
const sal   = document.querySelector('#sal');
const naam = document.querySelector('#naam');

agebtn.addEventListener('click',function(){
   result.innerHTML = marrycal(naam.value,sal.value);
   
   
   
});




/**
* <======================== currency converter =========================>
*/
const bangladesh = document.querySelector('#bangladesh');
const currency   = document.querySelector('#currency');
const currencyCheck = document.querySelector('#currencyCheck');
const outout = document.querySelector('#outout');

currencyCheck.addEventListener('click',function(){
 

 outout.innerHTML = currencycal(bangladesh.value,currency.value)


});


