const inputs = document.querySelectorAll(".angle-input")
const isTriangleButton = document.querySelector("#is-triangle-button")
const output = document.querySelector("#output")

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles)
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))

    if (sumOfAngles === 180) {
        // console.log("The angles form a triangle")
        output.innerText = "The angles form a triangle"
    } else {
        // console.log("The angles do not for a triangle")
        output.innerText = "The angles do not form a triangle"
    }

}

isTriangleButton.addEventListener("click", isTriangle)