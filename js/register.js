var uname = document.getElementById('uname')
var mail = document.getElementById('mail')
var pass1 = document.getElementById('pass1')
var pass2 = document.getElementById('pass2')
var regbu = document.getElementById('regbu')

var rep = document.getElementById('rep')
const originalStyle = rep.style.cssText;
const originalInnerHTML = rep.innerHTML;
regbu.addEventListener('submit',function(e){
    e.preventDefault();
    if(pass2.value != pass1.value){
        //alert('no match')
        rep.innerHTML='password does not match<br>please enter same password'
        rep.style.color='red'
        return
    }
    rep.style.cssText = originalStyle;
    rep.innerHTML = originalInnerHTML;
    console.log('form submitted')
        userData={
            uname :uname.value,
            mail: mail.value,
            pass1: pass1.value,
            pass2: pass2.value,
        }
        localStorage.setItem('user',JSON.stringify(userData))
        console.log(userData)
})
