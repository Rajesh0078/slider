const section = document.querySelector("#section")

let isDragleft = false,prevPageX, prevScrollLeft;


let dragStart = (e) =>{
    isDragleft = true;
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = section.scrollLeft
}
let dragStop = (e) =>{
    isDragleft = false;
}
section.addEventListener("mousemove", (e)=>{
    if(!isDragleft) return;
    e.preventDefault()
    let positioDiff = e.pageX - prevPageX
    section.scrollLeft = prevScrollLeft - positioDiff
})
section.addEventListener("touchmove", (e)=>{
    if(!isDragleft) return;
    e.preventDefault()
    let positioDiff = e.touches[0].pageX - prevPageX
    section.scrollLeft = prevScrollLeft - positioDiff
})





section.addEventListener("mousedown", dragStart)
section.addEventListener("touchstart", dragStart)


section.addEventListener("mouseup", dragStop)
section.addEventListener("mouseleave", dragStop)
section.addEventListener("touchend", dragStop)