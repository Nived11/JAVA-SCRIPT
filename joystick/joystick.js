function up(){
        const circle= document.getElementById("circle");
        let currentTop= parseInt(window.getComputedStyle(circle).top)
        circle.style.top=(currentTop-20)+"px";
}
function left(){
    const circle= document.getElementById("circle");
    let CurrentLeft=parseInt(window.getComputedStyle(circle).left)
    circle.style.left=(CurrentLeft-20)+"px";

}function rgt(){
    const circle= document.getElementById("circle");
    let CurrentLeft=parseInt(window.getComputedStyle(circle).left)
    circle.style.left=(CurrentLeft+20)+"px";
}
function dwn(){
    const circle= document.getElementById("circle");
    let CurrentLeft=parseInt(window.getComputedStyle(circle).top)
    circle.style.top=(CurrentLeft+20)+"px";
}


function cntr(){
    document.getElementById("circle").style.top=50 +"%"
    document.getElementById("circle").style.left=50 +"%"


    
}