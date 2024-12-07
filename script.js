const countDisplay = document.querySelector('.count-display');
const progressBarFill = document.querySelector('.progress-fill');
const loadingPage = document.querySelector('.loading-page');
const welcomePage = document.querySelector('.welcome-page');
const splash = document.createElement('div');
const steering_image = document.querySelector('.steering-image');

splash.className = 'splash';
document.body.appendChild(splash);

let count = 0;
const duration = 3000;
const intervalTime = 40;
const totalSteps = duration / intervalTime;

const countingInterval = setInterval(() => {
    count += 1;
    const progressPercentage = (count / totalSteps) * 100;
    countDisplay.innerHTML = `${Math.round(progressPercentage)}<span class="percentage-sign">%</span>`;
    progressBarFill.style.width = `${progressPercentage}%`;

    if (progressPercentage >= 100) {
        clearInterval(countingInterval);
        gsap.to(splash, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                gsap.to(loadingPage, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingPage.style.display = 'none';
                        welcomePage.style.display = 'flex';
                        gsap.fromTo(
                            welcomePage,
                            { opacity: 0 },
                            {
                                opacity: 1,
                                duration: 0.8,
                                ease: "power2.out",
                                onComplete: () => {
                                    setTimeout(() => {
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
                                                top: "-100%",
                                                duration: 2.5,
                                                ease: "power2.out",
                                                delay: 1,
                                                scale: 1.1,
                                                opacity: 0,
                                            }, 'a')
                                            .to("#bottom", {
                                                bottom: "-100%",
                                                duration: 2.5,
                                                ease: "power2.out",
                                                delay: 1,
                                                scale: 1.1,
                                                opacity: 0,
                                            }, 'a')
                                            .from("#content", {
                                                opacity: 0,
                                                scale: 0.8,
                                                duration: 1,
                                                ease: "back.out(1.7)",
                                                stagger: 0.2
                                            });
                                    }, 100);
                                }
                            }
                        );
                    }
                });
            }
        });
    }
}, intervalTime);


let degree = 0;

steering_image.addEventListener("mousemove", mousemovehandler);

function mousemovehandler(e) {
    const rect = steering_image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const deltaX = e.clientX - centerX;
    degree = deltaX / 1.9; 
    if (degree > 105) degree = 105;
    if (degree < -105) degree = -105;
    steering_image.style.transition = 'transform 0.2s ease-out';
    steering_image.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
}

const video = document.getElementById('backgroundVideo');
function playRelatedVideo(box) {
    const videoSrc = box.getAttribute('data-video');
    if (video.src !== videoSrc) {
        video.src = videoSrc;
        video.load();
        video.play();
    }
}


const cars = [
    {
      image: "https://th.bing.com/th/id/R.b39799654b4560641fbf828c40ba6555?rik=c1%2bYDQcmOp8qAw&pid=ImgRaw&r=0",
      name: "Honda Sport Vision 2020",
      price: "$79,990",
      reviews: "4.8/5 (234 reviews)"
    },
    {
      image: "https://www.motortrend.com/uploads/2023/11/2024-Tesla-Cybertruck-debut-8.jpg",
      name: "Tesla Cyber Truck",
      price: "$55,300",
      reviews: "4.6/5 (187 reviews)"
    },
    {
      image: "https://th.bing.com/th/id/R.9c0565812caa5974b17ebbfec4430839?rik=NgPuFTpcZ1Sknw&pid=ImgRaw&r=0",
      name: "Ford Rapter",
      price: "$42,000",
      reviews: "4.7/5 (312 reviews)"
    }
  ];
  
  // Access the container element
  const container = document.getElementById("car-container");
  
  // Dynamically generate car cards
  cars.forEach(car => {
    const carCard = `
      <div class="car-card">
        <img src="${car.image}" alt="${car.name}">
        <div class="car-name">${car.name}</div>
        <div class="car-price">${car.price}</div>
        <div class="car-reviews">${car.reviews}</div>
        <button>Buy Now</button>
      </div>
    `;
    container.innerHTML += carCard;
  });  