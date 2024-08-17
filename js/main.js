
//---------------------------------------------------
//changing text on home page

//og change
const textChange1 = document.querySelector('.section-1 div p');
const changeButton1 = document.querySelector('.section-1 div h3');

console.log(textChange1);
console.log(changeButton1);


function change1() {
    textChange1.textContent = "Blended together, these fruits create a harmonious and invigorating beverage that's perfect for a sunny day or a tropical escape, capturing the essence of a paradise in every sip.";
}

changeButton1.addEventListener('click', change1);

//sk change
const textChange2 = document.querySelector('.section-2 div p');
const changeButton2 = document.querySelector('.section-2 div h3');

console.log(textChange2);
console.log(changeButton2);


function change2() {
    textChange2.textContent = "Together, they create a visually striking and flavorful concoction, perfect for a summer day or as a fruity pick-me-up, this drink is a harmonious balance of sweet and tangy, capturing the essence of fresh, ripe fruit in every sip";
}

changeButton2.addEventListener('click', change2);

//rp
const textChange3 = document.querySelector('.section-3 div p');
const changeButton3 = document.querySelector('.section-3 div h3');

console.log(textChange3);
console.log(changeButton3);


function change3() {
    textChange3.textContent = "Together, they create a refreshing and harmonious blend, with the bright pink hue of the raspberries mingling seamlessly with the soft, golden undertones of the peaches. Ideal for a summer refreshment or a fruity indulgence, this drink captures the essence of seasonal fruit in a single, invigorating sip.";
}

changeButton3.addEventListener('click', change3);

//ll
const textChange4 = document.querySelector('.section-4 div p');
const changeButton4 = document.querySelector('.section-4 div h3');

console.log(textChange4);
console.log(changeButton4);


function change4() {
    textChange4.textContent = "The result is a perfectly balanced beverage that is both revitalizing and delicious, ideal for quenching thirst on a hot day or as a zesty mixer for cocktails. Its vibrant, citrusy profile makes it a timeless choice for those seeking a simple yet satisfying burst of freshness.";
}

changeButton4.addEventListener('click', change4);
