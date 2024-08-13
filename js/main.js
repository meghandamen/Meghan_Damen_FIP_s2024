console.log("JavaScript file is linked");

//changes the header img on breakpoints to the better sized photo
function updateImage() {
    const img = document.getElementById('responsive-img');
    if (window.innerWidth >= 1200) {
        img.src = '../images/quatroTittleCard-3.png';
    } else if (window.innerWidth >= 768) {
        img.src = '../images/quatroTittleCard-2.png';
    } else {
        img.src = '../images/quatroTittleCard.png';
    }  
}
//page load (load on desktop, tablet and phone)
updateImage();
//window resize (makes it interactive )
window.addEventListener('resize', updateImage);


function updateImage2() {
    const img = document.getElementById('responsive-img-2');
    if (window.innerWidth >= 1200) {
        img.src = '../images/poster03.png';
    } else if (window.innerWidth >= 768) {
        img.src = '../images/poster02.png';
    } else {
        img.src = '../images/poster01.png';
    }  
}
updateImage2();

window.addEventListener('resize', updateImage2);