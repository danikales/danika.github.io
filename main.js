
let title = document.querySelectorAll(".title");

title.forEach((titles) => {
    titles.addEventListener("click", () => {
        titles.style.color = "blue";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let svg = document.querySelector("svg");
    

    const svgNS = "http://www.w3.org/2000/svg";
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", 50);
    rect.setAttribute("y", 50);
    rect.setAttribute("width", 100);
    rect.setAttribute("height", 100);
    rect.setAttribute("fill", "red");

    svg.appendChild(rect);
});
