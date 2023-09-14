function toggleMenu() {
     
    var menu = document.querySelector('.menu');
    var navbar = document.querySelector('.navbar');
    var bar1=document.querySelector('#bar1');
    var bar2=document.querySelector('#bar2');
    var bar3=document.querySelector('#bar3');
    if (menu.style.transform === 'translateX(-100%)') {
      menu.style.transform = 'translateX(0)';
      
    } else {
      menu.style.transform = 'translateX(-100%)';
      
    }
    
     
  }

  var NavHeader = document.getElementById("myDIV");
var NavOpt = NavHeader.getElementsByClassName("navopt");
for (var i = 0; i < NavOpt.length; i++) {
    NavOpt[i].addEventListener("click", function() {
    var Current = document.getElementsByClassName("Active");
    console.log(Current.value)
    Current[0].className = Current[0].className.replace(" Active", "");
    this.className += " Active";
    });
  }





// for crousel

const carouselSlide = document.querySelector('.carousel-slide');
        const images = document.querySelectorAll('.carousel-slide img');

        let currentIndex = images.length - 1;

        function rotateImages() {
            images[currentIndex].classList.remove('visible');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('visible');
        }

        setInterval(rotateImages, 300); // 






        const goTopBtn = document.querySelector("[data-go-top]");

        window.addEventListener("scroll", function () {
        
          if (window.scrollY >= 10) {
           
            goTopBtn.classList.add("active");
          } else {
           
            goTopBtn.classList.remove("active");
          }
        
        });
        