// script.js
function randomFlicker() {
    const flickerElements = document.querySelectorAll('.background');

    flickerElements.forEach(element => {
        element.style.animationDuration = `${Math.random() * 10 + 1}s`;
        element.style.animationDelay = `${Math.random() * 3}s`;
    });
}

setInterval(randomFlicker, 3000);

document.addEventListener('mousemove', function(e) {
    const image = document.querySelector('.cross');
    const rect = image.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const offsetX = mouseX - (rect.left + rect.width / 2);
    const offsetY = mouseY - (rect.top + rect.height / 2);
    
    const shadowX = offsetX / 10;
    const shadowY = offsetY / 10;
    
    image.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.5))`;
});
