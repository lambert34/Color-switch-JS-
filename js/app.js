const button = document.getElementById("btn");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71", "#ff5733", "f9ff33", "#f1f5f8", "red", "green", "blue"];

button.addEventListener("click", () => {
    console.log("click");
    console.log(getRandomNumber());
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}