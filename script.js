const crasoul = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = document.querySelectorAll("img")[0];

let isDragging = false;
let prevPageX;  
let prevScrollLeft;


let showHideIcon = ()=>{
    let scrollWidths = crasoul.scrollWidth - crasoul.clientWidth;
    arrowIcons[0].style.display = crasoul.scrollLeft == 0 ? "none":"block";
    arrowIcons[1].style.display = crasoul.scrollLeft == scrollWidths ? "none":"block";
}

arrowIcons.forEach(icon =>{
    icon.addEventListener("click",()=>{
        let firstImageWidth = firstImg.clientWidth+10;
crasoul.scrollLeft += icon.id=="left" ? -firstImageWidth : firstImageWidth;
  setTimeout(()=> showHideIcon(),60)  
    });
});

const dragginStart = (e)=>{
    isDragging = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = crasoul.scrollLeft;
}

const dragging = (e)=>{
if(!isDragging) return;
e.preventDefault();
crasoul.classList.add("dragging");
let possitionDiff =( e.pageX ||e.touches[0].pageX) - prevPageX;
crasoul.scrollLeft= prevScrollLeft - possitionDiff;
showHideIcon();
// console.log(crasoul.scrollLeft)
}

const dragginStop =(e)=>{
    isDragging = false;
    crasoul.classList.remove("dragging");
    e.preventDefault();

}

crasoul.addEventListener("mousedown",dragginStart)
crasoul.addEventListener("touchstart",dragginStart)

crasoul.addEventListener("mousemove",dragging)
crasoul.addEventListener("touchmove",dragging)

crasoul.addEventListener("mouseup",dragginStop)
crasoul.addEventListener("mouseleave",dragginStop)
crasoul.addEventListener("touchend",dragginStop)