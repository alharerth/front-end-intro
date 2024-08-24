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
var cc= document.getElementById('cartCounter')
var c1= document.getElementsByClassName('cartCounter')
function counter(id1){
    if(c1[id1].innerHTML=='added to cart')
        alert('already added to cart')
    else
    cc.innerHTML=parseInt(cc.innerHTML)+1
    c1[id1].innerHTML='added to cart'
}