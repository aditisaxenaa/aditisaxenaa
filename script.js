var menubar = document.querySelector('#menubar');
var full_menu = document.querySelector('#full_menu');
var close = document.querySelector('#close');

menubar.addEventListener('click',function(){
    full_menu.style.transform = 'translateX(100%)';
})

close.addEventListener('click',function(){
    full_menu.style.transform = 'translateX(0%)';
})

function onset(){
    full_menu.style.transform = 'translateX(100%)';

}

function closet(){
    full_menu.style.transform = 'translateX(0%)';

}

onset();
closet();

// animation-GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from('#look_designer .anim',{
    scrollTrigger:{
        trigger:'#look_designer',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1,
    y:30,
    ease:'expo.easeInOut'

})

gsap.from('#intro .anim',{
    scrollTrigger:{
        trigger:'#intro',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1.5,
    y:30,
    ease:'Expo.easeInOut'

})


gsap.from('#design .anim',{
    scrollTrigger:{
        trigger:'#design',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1.5,
    y:30,
    ease:'Expo.easeInOut'

})

gsap.from('#work_previews .anim',{
    scrollTrigger:{
        trigger:'#work_previews',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1.5,
    y:30,
    ease:'Expo.easeInOut'

})

gsap.from('#contact .anim',{
    scrollTrigger:{
        trigger:'#contact',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1.5,
    y:30,
    ease:'Expo.easeInOut'

})



