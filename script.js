function reg() { 
    swal("Success!", "Your data have been saved. Thank you!", "success");
    for(var i=0; i<1000; i++) {
        window.location.replace("./login.html");
    }
}

function loggedin() { 
    swal("You have logged in successfuly!", "", "success");
    for(var i=0; i<1000; i++) {
        window.location.replace("./index.html");
    }
}
function added() { 
    swal("Added to cart!", "", "success");
}

function ordered() { 
    swal("Order Placed!", "", "success");
    for(var i=0; i<1000; i++) {
        window.location.replace("./shop.html");
    }
}

function thankyou() { 
    swal("Response Submitted!", "", "success");
}

function shopping(){
    window.location.replace("./shop.html");
}

(function(window, document, undefined) {

    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.onload = init;

    function init(){
        var bar = document.getElementById('bar');
        var login = document.getElementById('login_btn');
        var shop = document.getElementById('shop-now');
        if (bar) {
            bar.onclick = function(){
                const nav = document.querySelector(".nav");
                nav.classList.toggle('active');
            }
        }
        if (login){
            login.onclick = function(){
                window.location.replace("./login.html");
            }
        }
        if (shop) {
            shop.onclick = function(){
                window.location.replace("./shop.html");
            }
        }

        const log_btn = document.querySelector("#log-btn");
        const reg_btn = document.querySelector("#reg-btn");
        const log_btn2 = document.querySelector("#log2");
        const reg_btn2 = document.querySelector("#reg2");
        const container = document.querySelector(".login-reg");

        if (reg_btn) {
            reg_btn.addEventListener("click", () =>{
                container.classList.add("register-mode");
            })
        }
        if(log_btn) {
            log_btn.addEventListener("click", () =>{
                container.classList.remove("register-mode");
            })    
        }
        if (reg_btn2) {
            reg_btn2.addEventListener("click", () =>{
                container.classList.add("register-mode2");
            })
        }
        if (log_btn2) {
            log_btn2.addEventListener("click", () =>{
                container.classList.remove("register-mode2");
            })
        }
        
    }
  
  })(window, document, undefined);