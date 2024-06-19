(function(window, document, undefined) {

    window.addEventListener('scroll', reveal);
    const fullLink = window.location.pathname;
    const activeLink = fullLink.split('/').pop().replace('.html', '');
    setActiveClass(activeLink);

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

    function setActiveClass(elementId) {
        //getting the element that has the id of the page name
        const element = document.getElementById(elementId);
        //checking if the element is valid
        if (element) {
            //adding class active to the element
            element.classList.add('active');
        }
    }
  
    window.onload = init;
  
    function init(){
        const bar = document.getElementById('bar');
        bar.onclick = function(){
            const nav = document.querySelector ('nav');
            nav.classList.toggle('active_navbar');
        }
    }
  
  })(window, document, undefined);