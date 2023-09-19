var typingEffect = new Typed(".multitext",{
    strings : ["Student", "Designer", "Programmer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1500
})

const coords = { x:0, y:0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateCircles();
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        circle.style.left = x + "px";
        circle.style.top = y+15 + "px";

        circle.style.scale = (circles.length - index) / 10;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
    });
}

const button = document.getElementById('totop');

function handleScroll() {
  const scrollThreshold = 767.2000122070312;
  if (window.scrollY >= scrollThreshold) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

const form = document.querySelector('form');

form.addEventListener('submit', function() {
  form.reset();
});

const mobileOverlay = document.getElementById('overlay');

function checkScreenSize() {
  if (window.innerWidth <= 1080) {
    mobileOverlay.style.display = 'block';
  } else {
    mobileOverlay.style.display = 'none';
  }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
