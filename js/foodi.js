
var contactButton = document.getElementById('contactButton')
function contactUs(){
alert("u r trying to contact us")
contactButton.innerHTML='u contacted us'
contactButton.style.backgroundColor='red'
}
var num = document.getElementById('num')
var para = document.getElementById('para')
function checkPrime(){
if(parseInt(num.value)%2!=0 && parseInt(num.value)%3!=0 && parseInt(num.value)>1){
para.innerHTML='number is a prime'
}
else if(parseInt(num.value)==2)
para.innerHTML='number is a prime'
else
para.innerHTML='number is not a prime'
}
var bg=document.getElementById('greenBg')
function bc(){
bg.style.backgroundColor="red"
}