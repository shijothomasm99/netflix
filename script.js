const buttons = document.querySelectorAll(".accordion-button-m");
const closes = document.querySelectorAll(".close");
const opens = document.querySelectorAll(".open");
const accordionContents = document.querySelectorAll(".accordion-content-m");

buttons.forEach((value,index,array)=>{
    value.addEventListener("click",()=>{
        accordionContents[index].classList.toggle("d-none");
        closes[index].classList.toggle("d-none");
        opens[index].classList.toggle("d-none");

        for(let j=0;j<buttons.length;j++){
            if(j!=index){
                accordionContents[j].classList.add("d-none");
                closes[j].classList.add("d-none");
                opens[j].classList.remove("d-none");
            }
        }
        
    })
})
