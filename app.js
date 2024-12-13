    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });

    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        // e.preventDefault();
    });


    var cursor = document.querySelector(".cursor");
    var ele =  document.querySelector(".page2");
    ele.addEventListener('mousemove',function(val){
        console.log()
        cursor.style.scale=1
        cursor.style.left = val.x+"px";
        cursor.style.top= val.y+"px"; 
    })
    
    ele.addEventListener('mouseleave', function() {
        cursor.style.scale=1;
        cursor.style.opacity=0;
    });
        
    ele.addEventListener("mouseenter" , function(){
        cursor.style.scale=0;
        cursor.style.opacity=1;
        
        })  




        // page3______________ animation
        function page3(){
        var elemC = document.querySelector(".elem-container")
        var fixed = document.querySelector(".fixed-image")
        elemC.addEventListener("mouseenter" , function(){
            fixed.style.display = 'block'
            
            })  
        elemC.addEventListener("mouseleave" , function(){
                fixed.style.display = 'none'
                })

        var elems = document.querySelectorAll(".elem")
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                // alert("hey")
                var image = e.getAttribute("data-image")
                fixed.style.backgroundImage = `url(${image})`;

            })
        })
    }


    // pag4_________animation
    function page4(){
    var box = document.querySelector('.box');
    var boxs = document.querySelector('.rght');
    var hdgs = document.querySelectorAll("#head");
    var activeButton = null;  
    hdgs.forEach(function (e) {
        e.addEventListener("    click", function () {
            if (activeButton && activeButton !== e) {
               activeButton.style.transform = "translateX(0)";
                activeButton.style.color = '';
            
            }
            activeButton = e;
            e.style.transform = "translateX(10px)";
            e.style.transition = "transform 0.2s ease";
            e.style.color =  'white';

            var newtext = e.getAttribute('text')
            var newimage = e.getAttribute('left-img');
                
            box.textContent = newtext;
            boxs.style.backgroundImage = `url(${newimage})`;
            // alert("hey buddy ")
        })
    })
    window.addEventListener('DOMContentLoaded', (event) => {
        hdgs[0].click(); 
    });
    }


    // swipre______
    function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
      
      });
    }

    function menuanimation(){
        var menu = document.querySelector(".nav h3")
        var page =  document.querySelector(".full-scr")
        var naimg = document.querySelector(".nav img")
        menu.addEventListener("click" , function(){
            page.style.top = 0
            naimg.style.opacity = 0
            // if(flag == 0){
            //     flag=1           
        
            // }
            // else{
            //     flag=0        
            //     page.style.top = -100%
            //     naimg.style.opacity = 0.9
            // }
        } )
    }



    var loader = document.querySelector(".loader");
    setTimeout(function() {
        loader.style.top = "-100%";
}, 3000)

    menuanimation();  
    swiperAnimation();
    page3();
    page4();