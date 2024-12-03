

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouseFollower(){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) `

    })
}

function firstPageAnimtion(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        duration: 1.5,
        opacity: 0,
        y: '-10',
        ease: "power2.inOut"
    })
   
    tl.to(".boundingElem",{
        duration: .7,
        y: 0,
        delay : -1,
        ease: "power2.inOut",
        stagger : .2,
    })
    tl.from("#hero-footer",{
        duration: 1.5,
        opacity: 0,
        y: '-10',
        delay: -1,
        ease: "power2.inOut"
    })
}



mouseFollower();
firstPageAnimtion();


document.querySelectorAll(".content").forEach(function(content){
    content.addEventListener("mouseleave",function(details){
        gsap.to(content.querySelector("img"),{
            opacity:0,
            ease: Power3,

            

        });
    });

    content.addEventListener("mousemove",function(details){

        var diff = details.clientY - content.getBoundingClientRect().top ;


        gsap.to(content.querySelector("img"),{
            opacity:1,
            ease: Power1,
            top: diff - 200,
            left: details.clientX,
            

        });

    });

});

