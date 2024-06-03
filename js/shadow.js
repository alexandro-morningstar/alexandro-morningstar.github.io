// script.js

document.addEventListener('mousemove', function(e) {
    const image = document.querySelector('.spike');
    const rect = image.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const offsetX = mouseX - (rect.left + rect.width / 2);
    const offsetY = mouseY - (rect.top + rect.height / 2);
    
    const shadowX = offsetX / 10;
    const shadowY = offsetY / 10;
    
    image.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.5))`;
});

let alexandro = (coffee) => {console.log(`Web Developer`);};