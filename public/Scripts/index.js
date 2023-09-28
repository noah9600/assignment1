function changeBackgroundColor() {
    var colors = ["#ffd700", "#ff6b6b", "#9af5a3", "#a3c6ff", "#f5a3e3"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;}
    