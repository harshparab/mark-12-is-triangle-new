const baseInput = document.querySelector("#base-input")
const heightInput = document.querySelector("#height-input")
const areaBtn = document.querySelector("#area-btn")
const output = document.querySelector("#output")

function calculateArea(){
    const area = (Number((baseInput.value))*Number((heightInput.value)))/2
    output.innerHTML = "The area of triangle is " + area
}

areaBtn.addEventListener('click', calculateArea)