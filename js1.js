var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",  
        markers: true,     
        start: "50% 50%", 
        end: "100% 50%",   
        scrub: 2,          
        pin: true         
    }
});

tl
.to("#top", {
    top: "-50%",
    duration: 1.5,    // Increased duration for a slower animation
    ease: "power2.out", // Smoother easing for a dramatic effect
    delay: 1        // Added delay before the animation starts
}, 'a')
.to("#bottom", {
    bottom: "-50%",
    duration: 1.5,    // Increased duration for consistency
    ease: "power2.out", // Smoother easing for a dramatic effect
    delay: 1        // Added delay before the animation starts
}, 'a');
