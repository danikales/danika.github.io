document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('solosis-container');
    if (!container) return;

    const svgNS = "http://www.w3.org/2000/svg";

  
    const solosisSVG = document.createElementNS(svgNS, "svg");
    solosisSVG.setAttribute("width", "800");
    solosisSVG.setAttribute("height", "250"); 

    // jelly body
    const body = document.createElementNS(svgNS, "circle");
    body.setAttribute("cx", 100);
    body.setAttribute("cy", 100);
    body.setAttribute("r", 100);
    body.setAttribute("fill", "lightgreen");
    solosisSVG.appendChild(body);

    // head left
    const headLeft = document.createElementNS(svgNS, "circle");
    headLeft.setAttribute("cx", 75);
    headLeft.setAttribute("cy", 100);
    headLeft.setAttribute("r", 50);
    headLeft.setAttribute("fill", "lightyellow");
    solosisSVG.appendChild(headLeft);

    // head right
    const headRight = document.createElementNS(svgNS, "circle");
    headRight.setAttribute("cx", 125);
    headRight.setAttribute("cy", 100);
    headRight.setAttribute("r", 50);
    headRight.setAttribute("fill", "lightyellow");
    solosisSVG.appendChild(headRight);

    // eye left
    const eyeLeft = document.createElementNS(svgNS, "circle");
    eyeLeft.setAttribute("cx", 70);
    eyeLeft.setAttribute("cy", 100);
    eyeLeft.setAttribute("r", 8);
    eyeLeft.setAttribute("fill", "black");
    solosisSVG.appendChild(eyeLeft);

    // eye right
    const eyeRight = document.createElementNS(svgNS, "circle");
    eyeRight.setAttribute("cx", 130);
    eyeRight.setAttribute("cy", 100);
    eyeRight.setAttribute("r", 8);
    eyeRight.setAttribute("fill", "black");
    solosisSVG.appendChild(eyeRight);

    // mouth
    const mouth = document.createElementNS(svgNS, "circle");
    mouth.setAttribute("cx", 100);
    mouth.setAttribute("cy", 100);
    mouth.setAttribute("r", 12);
    mouth.setAttribute("fill", "pink");
    solosisSVG.appendChild(mouth);

    // ear
    const ear = document.createElementNS(svgNS, "circle");
    ear.setAttribute("cx", 150);
    ear.setAttribute("cy", 55);
    ear.setAttribute("r", 20);
    ear.setAttribute("fill", "yellow");
    solosisSVG.appendChild(ear);

    container.appendChild(solosisSVG);

   ///////////////////////////////

    const barSVG = document.createElementNS(svgNS, "svg");
    barSVG.setAttribute("width", "600");
    barSVG.setAttribute("height", "250"); 

    
    const bg = document.createElementNS(svgNS, "rect");
    bg.setAttribute("x", 160);
    bg.setAttribute("y", 20);
    bg.setAttribute("width", 400);
    bg.setAttribute("height", 180);
    bg.setAttribute("fill", "lightgray");
    barSVG.appendChild(bg);

    // title for chart
    const title = document.createElementNS(svgNS, "text");
    title.setAttribute("x", 300);
    title.setAttribute("y", 15);
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-size", "20");
    title.setAttribute("font-family", "monospace");
    title.textContent = "My Enjoyments";
    barSVG.appendChild(title);

    // bar1 2d design
    const bar1 = document.createElementNS(svgNS, "rect");
    bar1.setAttribute("x", 160);
    bar1.setAttribute("y", 30);
    bar1.setAttribute("width", 180);
    bar1.setAttribute("height", 30);
    bar1.setAttribute("fill", "skyblue");
    barSVG.appendChild(bar1);

    const label1 = document.createElementNS(svgNS, "text");
    label1.setAttribute("x", 50);
    label1.setAttribute("y", 50);
    label1.setAttribute("font-size", "14");
    label1.setAttribute("font-family", "monospace");
    label1.textContent = "2D Design";
    barSVG.appendChild(label1);

    // bar2 3d design
    const bar2 = document.createElementNS(svgNS, "rect");
    bar2.setAttribute("x", 160);
    bar2.setAttribute("y", 70);
    bar2.setAttribute("width", 200);
    bar2.setAttribute("height", 30);
    bar2.setAttribute("fill", "pink");
    barSVG.appendChild(bar2);

    const label2 = document.createElementNS(svgNS, "text");
    label2.setAttribute("x", 50);
    label2.setAttribute("y", 90);
    label2.setAttribute("font-size", "14");
    label2.setAttribute("font-family", "monospace");
    label2.textContent = "3D Design";
    barSVG.appendChild(label2);

    // bar3 model making
    const bar3 = document.createElementNS(svgNS, "rect");
    bar3.setAttribute("x", 160);
    bar3.setAttribute("y", 110);
    bar3.setAttribute("width", 240);
    bar3.setAttribute("height", 30);
    bar3.setAttribute("fill", "orange");
    barSVG.appendChild(bar3);

    const label3 = document.createElementNS(svgNS, "text");
    label3.setAttribute("x", 50);
    label3.setAttribute("y", 130);
    label3.setAttribute("font-size", "14");
    label3.setAttribute("font-family", "monospace");
    label3.textContent = "Model Making";
    barSVG.appendChild(label3);

    // bar4 coding
    const bar4 = document.createElementNS(svgNS, "rect");
    bar4.setAttribute("x", 160);
    bar4.setAttribute("y", 150);
    bar4.setAttribute("width", 20);
    bar4.setAttribute("height", 30);
    bar4.setAttribute("fill", "green");
    barSVG.appendChild(bar4);

    const label4 = document.createElementNS(svgNS, "text");
    label4.setAttribute("x", 50);
    label4.setAttribute("y", 170);
    label4.setAttribute("font-size", "14");
    label4.setAttribute("font-family", "monospace");
    label4.textContent = "Coding";
    barSVG.appendChild(label4);

    container.appendChild(barSVG);
});
