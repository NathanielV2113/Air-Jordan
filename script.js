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
        bar.onclick = function(){
            const nav = document.querySelector(".nav");
            nav.classList.toggle('active');
        }

        var login = document.getElementById('login_btn');
        login.onclick = function(){
            window.location.replace("./login.html");
        }

        const log_btn = document.querySelector("#log-btn");
        const reg_btn = document.querySelector("#reg-btn");
        const log_btn2 = document.querySelector("#log2");
        const reg_btn2 = document.querySelector("#reg2");
        const container = document.querySelector(".login-reg");

        reg_btn.addEventListener("click", () =>{
            container.classList.add("register-mode");
        })
        log_btn.addEventListener("click", () =>{
            container.classList.remove("register-mode");
        })

        reg_btn2.addEventListener("click", () =>{
            container.classList.add("register-mode2");
        })
        log_btn2.addEventListener("click", () =>{
            container.classList.remove("register-mode2");
        })
    }
  
  })(window, document, undefined);