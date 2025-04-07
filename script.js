document.getElementById("increase-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize + 2) + "px";
});

document.getElementById("decrease-font").addEventListener("click", function() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    currentSize = parseFloat(currentSize);
    document.body.style.fontSize = (currentSize - 2) + "px";
});