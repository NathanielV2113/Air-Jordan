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
            var nav = document.querySelector('nav');
            nav.style.display = 'flex';
        }
    }
  
  })(window, document, undefined);