

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

// function cursorSkew(){
//     //define default scale value 
//     var xScale = 1;
//     var yScale =1;

//     //define previous position 
//     var xPrev = 0;
//     var yPrev = 0;

//     window.addEventListener("mousemove",function(dets){
//         yScale =  gsap.utils.clamp(.8,1,2,yDiff);
//         xScale= gsap.utils.clamp(.8,1,2,xDiff);//gsap.utils.clamp is a function that clamps or sets any value other than the the given range to the nearest minima or maxima , for eg : if xDiff comes out to be 42 the its value gets sets to 1.2
//         var xDiff = dets.clientX - xPrev;//this calculates the diff by subtracting the initial position from new position
//         var yDiff = dets.clientY - yPrev;

//         xPrev = dets.clientX;//initial positon of cursor in x-axis gets saved in x prev
//         yPrev = dets.clientY;//initial positon of cursor in y-axis gets saved in y prev
//      })



// }


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

